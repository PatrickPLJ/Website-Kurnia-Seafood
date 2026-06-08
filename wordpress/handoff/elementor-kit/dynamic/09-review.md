# 09 · KATA PELANGGAN — Ulasan Google LIVE (DINAMIS · render #9)

**Section id:** `#review` · **Sumber markup LENGKAP & KANONIK:** `wordpress/sections/04-review.html` (main)
**Sumber data:**
- **Endpoint proxy** (ulasan asli): `window.KS_CONFIG.REVIEWS_ENDPOINT` — didefinisikan di `wordpress/data/config.js` (di `main` statusnya **TERISI**). **JANGAN salin nilainya ke paket ini** — muat `config.js` dan baca dari `window.KS_CONFIG`. (Endpoint ulasan = GET publik/read-only, bukan rahasia; tetap rujuk dari `config.js` sebagai sumber tunggal.)
- **Fallback contoh:** `wordpress/data/google-reviews.js` → `window.KS_REVIEWS_SAMPLE` (bertanda `dataPlaceholder:true`, nama "Contoh Pelanggan", badge **CONTOH**).

## Cara kerja (locked)
1. Render **placeholder CONTOH** dulu (dari `KS_REVIEWS_SAMPLE`) supaya section tidak kosong.
2. Bila `REVIEWS_ENDPOINT` terisi → `fetch` GET proxy → ganti dengan **ulasan ASLI Google**.
3. Bila endpoint kosong / proxy gagal / tak ada ulasan → **tetap** placeholder, **tanpa** menampilkan error.

**Proxy** (`wordpress/integrations/google-reviews-apps-script.gs`) memanggil Google Places Details API **di sisi server**; **API key Google ada di Script Properties server, TIDAK PERNAH di front-end**. Respons di-key per **SLUG** cabang:
```
{ updated:"ISO", branches:{ <slug>:{ rating, total, reviews:[ {author,photo,url,rating,text,time} ] } } }
```
**Batas API:** maksimal **5 ulasan per lokasi**, tidak bisa difilter "terbaik" → ≤5 kartu/cabang (≤25 total).

## Kepatuhan Google (WAJIB di renderer)
- Tampilkan **nama + foto profil** penulis bila ada.
- Badge sumber selalu **"Google"** + link **"Lihat di Google"** (`authorUrl`) = atribusi wajib.
- **Teks ulasan tidak diedit/disensor**; truncate tampilan panjang + link "selengkapnya di Google".
- Jangan cache permanen sebagai milik sendiri (cache pendek ~6 jam di proxy).
- **Agregat `4.9 / 26.586` = TEKS BRAND** (gabungan 5 cabang, snapshot) — **BUKAN** `aggregateRating` schema, dan **BUKAN** jumlah kartu yang tampil.

## Cara pasang di WordPress
1. Muat **sekali** (Custom Code Header / widget HTML atas), urut: `data/config.js` → `data/branches.js` → `data/google-reviews.js`.
2. Tempel **isi penuh** `wordpress/sections/04-review.html` (main) ke widget **HTML** di posisi render #9. File itu sudah berisi seluruh CSS + JS renderer yang patuh Google. **Ini cara yang disarankan** (sudah teruji).
3. Pastikan SLUG cabang di `branches.js` cocok kunci proxy (`yogyakarta|semarang|bandung|bali|surabaya`).

> Bila ingin implementasi PHP-native (mis. tarik via WP cron + transient cache lalu render server-side), tetap pertahankan: panggil Places API **dari server** (key rahasia), atribusi Google + link sumber, label cabang, fallback CONTOH, tanpa aggregateRating.

## Snippet ringkas (jika tidak menempel file penuh)
> Versi minimal — untuk implementasi produktif gunakan `sections/04-review.html` yang lengkap. Endpoint **dibaca dari `window.KS_CONFIG`**, tidak di-hardcode.

```html
<section id="review" class="ks-rev">
  <header class="ks-rev__head">
    <h2 class="ks-rev__title">Dicintai keluarga di lima kota</h2>
    <!-- AGREGAT = TEKS BRAND, bukan aggregateRating -->
    <p class="ks-rev__agg-line">Rating <strong>4.9</strong> dari <strong>26.586</strong> ulasan
      <span>— gabungan seluruh 5 cabang</span></p>
    <p class="ks-rev__sub">Beberapa di antaranya, langsung dari Google:</p>
  </header>
  <div class="ks-rev__grid" aria-live="polite"></div>
  <p class="ks-rev__attr">Ulasan diberdayakan oleh Google</p>
</section>
<script>
(function () {
  var grid = document.querySelector('#review .ks-rev__grid');
  var cfg  = window.KS_CONFIG || {};                 // <-- endpoint dari config.js
  var SLUG = { yogyakarta:'Yogyakarta', semarang:'Semarang', bandung:'Bandung', bali:'Bali', surabaya:'Surabaya' };
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c];});}
  function stars(n){n=Math.max(0,Math.min(5,Math.round(+n||0)));var s='';for(var i=0;i<5;i++)s+=i<n?'★':'☆';return s;}
  function card(g, rv){
    var ph = rv.dataPlaceholder ? '<span class="ks-rc__ph">CONTOH</span>' : '';
    var gUrl = rv.authorUrl || ('https://www.google.com/maps/search/'+encodeURIComponent('Kurnia Seafood '+(SLUG[g.slug]||g.branch||'')));
    return '<figure class="ks-rc">'+ph+
      '<p class="ks-rc__name">'+esc(rv.authorName||'Pengguna Google')+'</p>'+
      '<span class="ks-rc__src">Google</span> <span class="ks-rc__branch">📍 '+esc(SLUG[g.slug]||g.branch||'')+'</span>'+
      '<div class="ks-rc__stars">'+stars(rv.rating)+'</div>'+
      '<blockquote class="ks-rc__text">'+esc(rv.text||'')+'</blockquote>'+   /* teks TIDAK diedit */
      '<a class="ks-rc__glink" href="'+esc(gUrl)+'" target="_blank" rel="noopener nofollow">Lihat di Google</a>'+
    '</figure>';
  }
  function mapRv(r){return{authorName:r.author||r.authorName||'',profilePhotoUrl:r.photo||r.profilePhotoUrl||'',authorUrl:r.url||r.authorUrl||'',rating:r.rating,text:r.text||'',relativeTime:r.time||r.relativeTime||'',dataPlaceholder:r.dataPlaceholder};}
  function render(groups){var out=[];groups.forEach(function(g){(g.reviews||[]).forEach(function(rv){out.push(card(g,rv));});});grid.innerHTML=out.join('')||'<p>Ulasan belum tersedia.</p>';}
  // 1) placeholder CONTOH dulu
  render(window.KS_REVIEWS_SAMPLE || []);
  // 2) coba ulasan ASLI via proxy (endpoint dari config.js)
  if (!cfg.REVIEWS_ENDPOINT) return;
  fetch(cfg.REVIEWS_ENDPOINT, { method:'GET' })
    .then(function(r){return r.json();})
    .then(function(resp){
      if (!resp || !resp.branches) return;
      var live = Object.keys(resp.branches).map(function(slug){
        var p = resp.branches[slug]; if(!p||!p.reviews||!p.reviews.length) return null;
        return { branch:SLUG[slug]||slug, slug:slug, rating:p.rating, userRatingsTotal:(p.total!=null?p.total:p.userRatingsTotal), reviews:p.reviews.map(mapRv) };
      }).filter(Boolean);
      if (live.length) render(live);   // ganti placeholder dgn ulasan asli
    })
    .catch(function(){ /* gagal → biarkan placeholder, jangan tampilkan error */ });
})();
</script>
```
