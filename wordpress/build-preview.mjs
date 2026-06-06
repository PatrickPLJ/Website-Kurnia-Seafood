/* =========================================================================
 * Kurnia Seafood — Build PREVIEW.html & preview-share.html
 * Menggabungkan section + data + LAPISAN METADATA (SEO/OG/Twitter) +
 * JSON-LD (Organization, 5 Restaurant, FAQPage) yang digenerate dari
 * sumber data tunggal (data/branches.js) & FAQ asli (sections/10-faq.html).
 *
 * Jalankan:  node wordpress/build-preview.mjs   (cwd = repo root atau wordpress/)
 * ====================================================================== */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const W = (p) => path.join(HERE, p);

/* ---------- konfigurasi metadata (DATA TERKUNCI) ---------- */
const SITE = 'https://kurniaseafood.co.id';          // domain utama (.co.id)
const BALI_SITE = 'https://kurniaseafoodbali.com';   // cabang Bali = domain terpisah
const IG = 'https://www.instagram.com/kurnia.seafood/';
const LOGO_ABS = 'https://patrickplj.github.io/Website-Kurnia-Seafood/wordpress/assets/kurnia-seafood-logo.png';
// og:image = PLACEHOLDER (foto pihak ketiga) → ganti foto resmi Kurnia sebelum live (lihat PLACEHOLDERS.md)
const OG_IMAGE = 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1200&q=72';
const TITLE = 'Kurnia Seafood — Restoran Seafood Segar di Yogyakarta, Semarang, Bandung, Bali & Surabaya';
const DESC  = 'Kurnia Seafood: seafood segar konsep market, bumbu spesial khas Kurnia. Cocok untuk keluarga & acara. Reservasi WhatsApp di 5 cabang.';

/* amenityFeature ringkas per cabang — SINKRON dengan wordpress/schema/inc/schema-jsonld.php */
const AMENITIES = {
  yogyakarta: ['Indoor & outdoor','Ruang VIP','Ruang meeting','Live music','Seafood market','Area bermain anak','Musala','Area parkir luas','Smoking area','Halal'],
  semarang:   ['Indoor ber-AC','Area outdoor','Gazebo','Ruang VIP','Ruang meeting','Area bermain anak','Musala','Area parkir luas','Welcome drink','Seafood market','Halal'],
  bandung:    ['Area bermain anak','Ruang VIP','Live music','Seafood market','Area outdoor','Smoking area','WiFi','Area parkir luas','Pembayaran kartu & QRIS','Layanan pesan antar','Halal'],
  bali:       ['Area parkir luas','Ruang meeting','Ruang acara & pernikahan','Live music','Toilet & kamar mandi','Seafood market','Courtyard','Menu vegetarian & India','Halal'],
  surabaya:   ['Aula utama','Ruang VIP','Karaoke','Ruang meeting','Seafood market','Halal'],
};

const DATA_FILES = ['data/config.js','data/branches.js','data/menu.js','data/promos.js','data/google-reviews.js'];
const ORDER = ['01-hero','12-spotlight','13-new-menu','14-signature','15-locations','07-tentang','11-cabang','08-galeri','04-review','05-kabar','10-faq','06-reservasi','09-footer'];

/* ---------- load data lewat sandbox (shim window) ---------- */
function loadData() {
  const sandbox = { window:{}, console:{ warn(){}, log(){}, error(){} } };
  sandbox.window.matchMedia = () => ({ matches:false });
  vm.createContext(sandbox);
  for (const f of DATA_FILES) vm.runInContext(fs.readFileSync(W(f),'utf8'), sandbox, { filename:f });
  return sandbox.window;
}

/* ---------- util ---------- */
const decode = (s) => s.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim();
const ldBlock = (obj) => '<script type="application/ld+json">' + JSON.stringify(obj) + '</script>';

/* ---------- JSON-LD: Organization ---------- */
function organization() {
  return {
    '@context':'https://schema.org','@type':'Organization','@id':SITE+'/#organization',
    name:'Kurnia Seafood', url:SITE+'/', logo:LOGO_ABS,
    parentOrganization:{ '@type':'Organization', name:'Kurnia Group' },
    sameAs:[IG, BALI_SITE+'/'],   // sameAs silang ke domain Bali
  };
}

/* ---------- JSON-LD: Restaurant per cabang aktif ---------- */
function restaurant(b) {
  const isBali = b.slug === 'bali';
  const base = isBali ? BALI_SITE + '/' : `${SITE}/cabang/${b.slug}/`; // TODO: sesuaikan URL final
  const sameAs = isBali ? [IG, SITE+'/'] : [IG];                        // Bali: sameAs silang ke domain utama
  const data = {
    '@context':'https://schema.org','@type':'Restaurant','@id':base+'#restaurant',
    name:b.name, url:base,
    telephone:'+'+b.whatsapp,            // kanonik …5758
    priceRange:'$$',                     // tanpa harga menu (indikator saja)
    servesCuisine:['Seafood','Indonesian'],
    address:{ '@type':'PostalAddress', streetAddress:b.address, addressCountry:'ID' },
    geo:{ '@type':'GeoCoordinates', latitude:b.geo.lat, longitude:b.geo.lng },
    amenityFeature:(AMENITIES[b.slug]||[]).map(n => ({ '@type':'LocationFeatureSpecification', name:n, value:true })),
    brand:{ '@type':'Brand', name:'Kurnia Seafood' },
    parentOrganization:{ '@type':'Organization', name:'Kurnia Group' },
    sameAs,
  };
  if (b.photo) data.image = b.photo; // foto cabang (placeholder)
  return data;
}

/* ---------- JSON-LD: FAQPage dari FAQ asli ---------- */
function faqPage() {
  const html = fs.readFileSync(W('sections/10-faq.html'),'utf8');
  const items = [];
  const re = /<details[^>]*>([\s\S]*?)<\/details>/g; let m;
  while ((m = re.exec(html))) {
    const block = m[1];
    const sum = block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/);
    const ans = block.match(/class="ks-faq__ans"[^>]*>([\s\S]*?)<\/div>/);
    if (!sum || !ans) continue;
    const q = decode(sum[1].replace(/<span class="ks-faq__ic"[\s\S]*?<\/span>/,''));
    const a = decode(ans[1]);
    if (q && a) items.push({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } });
  }
  if (!items.length) return null;
  return { '@context':'https://schema.org','@type':'FAQPage', mainEntity:items };
}

/* ---------- HEAD (metadata + JSON-LD) ---------- */
function head(dataTags, jsonld) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${TITLE}</title>
<meta name="description" content="${DESC}">
<!-- TODO: sesuaikan canonical ke URL halaman final saat domain produksi pasti -->
<link rel="canonical" href="${SITE}/">
<meta name="robots" content="noindex"><!-- preview only; hapus saat produksi -->
<!-- Open Graph -->
<meta property="og:type" content="restaurant">
<meta property="og:site_name" content="Kurnia Seafood">
<meta property="og:locale" content="id_ID">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${DESC}">
<meta property="og:url" content="${SITE}/">
<meta property="og:image" content="${OG_IMAGE}"><!-- PLACEHOLDER: ganti foto resmi Kurnia (PLACEHOLDERS.md) -->
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${TITLE}">
<meta name="twitter:description" content="${DESC}">
<meta name="twitter:image" content="${OG_IMAGE}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
${jsonld}
${dataTags}
<style>*{box-sizing:border-box}html,body{margin:0;padding:0;background:#fff}
.ks-preview-note{font-family:'Alexandria',sans-serif;background:#021526;color:#F6F1E7;text-align:center;padding:10px;font-size:13px}.ks-preview-note b{color:#FF6B6B}</style>
</head>
<body>
<div class="ks-preview-note">PRATINJAU DESAIN — Kurnia Seafood (untuk review tim). Foto/ulasan = contoh/placeholder.</div>
`;
}

/* ---------- build ---------- */
const win = loadData();
const branches = (win.KS_BRANCHES||[]).filter(b => b.status !== 'upcoming'); // upcoming TIDAK di-schema
const jsonldBlocks = [ organization(), ...branches.map(restaurant) ];
const faq = faqPage(); if (faq) jsonldBlocks.push(faq);
const jsonld = jsonldBlocks.map(ldBlock).join('\n');

const sections = ORDER.map(f => `\n<!-- ${f} -->\n` + fs.readFileSync(W(`sections/${f}.html`),'utf8')).join('\n');
const reveal = fs.readFileSync(W('ks-reveal.html'),'utf8');

// PREVIEW.html — data via <script src>
const extTags = DATA_FILES.map(d => `<script src="${d}"></script>`).join('\n');
fs.writeFileSync(W('PREVIEW.html'), head(extTags, jsonld) + sections + '\n' + reveal + '\n</body>\n</html>\n');

// preview-share.html — data inline + logo inline (file mandiri untuk dibagikan)
const inlineTags = DATA_FILES.map(d => `<script>${fs.readFileSync(W(d),'utf8')}</script>`).join('\n');
let share = head(inlineTags, jsonld) + sections + '\n' + reveal + '\n</body>\n</html>\n';
const logo = 'data:image/webp;base64,' + fs.readFileSync(W('assets/kurnia-seafood-logo.webp')).toString('base64');
for (const p of ['assets/kurnia-seafood-logo@2x.webp','assets/kurnia-seafood-logo.webp','assets/kurnia-seafood-logo.png']) share = share.split(p).join(logo);
fs.writeFileSync(W('preview-share.html'), share);

console.log('Build OK · JSON-LD blocks:', jsonldBlocks.length, '(Organization + ' + branches.length + ' Restaurant + ' + (faq?'FAQPage':'no FAQ') + ')');
console.log('FAQ Q&A:', faq ? faq.mainEntity.length : 0, '| Restaurants:', branches.map(b=>b.slug).join(', '));
