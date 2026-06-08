# 02 · SPOTLIGHT TERBARU (DINAMIS · render #2)

**Section id:** `#spotlight` · **Sumber markup:** `wordpress/sections/12-spotlight.html` (main)
**Sumber data:** `wordpress/data/promos.js` → `window.KS_PROMOS`

## Apa yang ditampilkan
Satu kartu promo/menu/campaign **paling baru yang aktif** (1 item). Bila tidak ada item `active:true`, section **auto-hide** (hilang sendiri).

Field per item (di `promos.js`): `type` (promo|menu|campaign), `title`, `desc`, `image`, `date` (YYYY-MM-DD, untuk urut terbaru), `ctaLabel`, `ctaHref`, `active` (boolean), `placeholder` (boolean).

> Saat ini `promos.js` berisi **1 contoh** (`placeholder:true`). Ganti dengan promo asli tim.

## Cara di WordPress (2 opsi)

### Opsi A — Cepat (tetap pakai data JS, tanpa CPT)
1. Tempel **sekali** isi `data/config.js` lalu `data/promos.js` (bungkus `<script>…</script>`) di Custom Code Header (Elementor Pro) atau widget HTML paling atas — **sebelum** section ini.
2. Tempel isi `sections/12-spotlight.html` ke widget **HTML** di posisi render #2.
3. Edit promo cukup di `promos.js`. Cocok bila tim tidak butuh form admin.

### Opsi B — Rapi (CPT + ACF + Loop Grid) — disarankan untuk jangka panjang
- Buat **CPT "Promo"** (atau pakai CPT "Menu" dengan kategori "Promo") — lihat `acf/cpt-register.php` sebagai pola (duplikasi untuk Promo bila perlu).
- Field ACF: `type` (select), `deskripsi` (textarea), `foto` (image), `tanggal` (date picker), `cta_label` (text), `cta_href` (url/link), `aktif` (true/false).
- Elementor **Loop Grid**: query CPT Promo, filter `aktif = true`, **Order by Date DESC**, **Posts per page = 1**.
- Map dynamic tags: Heading → `title`/judul post, Image → `foto`, Text → `deskripsi`, Button → `cta_label`/`cta_href`, badge → `type`.

## Aturan locked
- **TANPA HARGA.**
- Foto promo asli wajib menggantikan placeholder sebelum go-live.
