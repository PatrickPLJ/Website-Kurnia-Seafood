/* =========================================================================
 * Kurnia Seafood Signature — Build kurnia-signature-share.html
 * File HTML MANDIRI (semua aset lokal di-inline base64) supaya bisa dibuka
 * dobel-klik dari mana pun tanpa server — pola sama dengan
 * wordpress/preview-share.html.
 *
 * Foto dish memakai turunan terkompresi 900px di assets/share/ (file itulah
 * sumbernya; lihat signature/assets/README.md bagian 3). Foto dish ke-5 (media
 * library situs utama) & Google Fonts tetap URL (butuh internet, punya fallback).
 *
 * File hasil build inilah yang ditempel ke widget HTML Elementor di
 * kurniaseafood.co.id/kurnia-signature/.
 *
 * Jalankan:  node signature/build-share.mjs   (cwd = repo root atau signature/)
 * ====================================================================== */
import fs from 'node:fs';
import path from 'node:path';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const S = (p) => path.join(HERE, p);

const MIME = { '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.woff':'font/woff' };
const dataURI = (file) => {
  const mime = MIME[path.extname(file)];
  return `data:${mime};base64,` + fs.readFileSync(S(file)).toString('base64');
};

/* referensi di index.html → file sumber inline */
const REPLACEMENTS = [
  // foto dish, hero, join & private dining (turunan terkompresi milik folder ini)
  ['assets/share/menu-king-crab-sultan.jpg',        'assets/share/menu-king-crab-sultan.jpg'],
  ['assets/share/menu-ikan-bakar-kurnia.jpg',       'assets/share/menu-ikan-bakar-kurnia.jpg'],
  ['assets/share/menu-kepiting-garlic-caramel.jpg', 'assets/share/menu-kepiting-garlic-caramel.jpg'],
  ['assets/share/menu-udang-saus-malaka.jpg',       'assets/share/menu-udang-saus-malaka.jpg'],
  ['assets/share/menu-udang-saus-kurnia.jpg',       'assets/share/menu-udang-saus-kurnia.jpg'],
  // logo (vektor dari master resmi) & font brand CS Coaster
  ['assets/logo-kurnia-signature-dark.svg',  'assets/logo-kurnia-signature-dark.svg'],
  ['assets/CSCoster-Italic.woff2',          'assets/CSCoster-Italic.woff2'],
  ['assets/CSCoster-Italic.woff',           'assets/CSCoster-Italic.woff'],
  ['assets/CSCoster-Regular.woff2',         'assets/CSCoster-Regular.woff2'],
  ['assets/CSCoster-Regular.woff',          'assets/CSCoster-Regular.woff'],
];

let html = fs.readFileSync(S('index.html'), 'utf8');
let inlined = 0, skipped = [];
for (const [ref, file] of REPLACEMENTS) {
  if (!fs.existsSync(S(file))) { skipped.push(file); continue; }
  if (!html.includes(ref)) { skipped.push(ref + ' (tidak dirujuk)'); continue; }
  html = html.split(ref).join(dataURI(file));
  inlined++;
}

html = html.replace(
  '<body>',
  '<body>\n<!-- FILE MANDIRI hasil build signature/build-share.mjs — jangan edit langsung; edit index.html lalu build ulang. -->'
);

fs.writeFileSync(S('kurnia-signature-share.html'), html);
const kb = Math.round(fs.statSync(S('kurnia-signature-share.html')).size / 1024);
console.log(`Build OK · ${inlined} aset di-inline · kurnia-signature-share.html ${kb} KB`);
if (skipped.length) console.log('Dilewati:', skipped.join(' | '));
