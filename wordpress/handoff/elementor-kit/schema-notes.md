# Schema JSON-LD — cara pasang & aturan

**Sumber kanonik:** `wordpress/schema/inc/schema-jsonld.php` (main). File ini sudah lengkap & siap pakai — paket ini hanya menjelaskan pemasangan + aturan.

## Pasang di WordPress
1. Salin `schema-jsonld.php` ke child theme: `wp-content/themes/<child>/inc/schema-jsonld.php`.
2. Di `functions.php` child theme:
   ```php
   require_once get_stylesheet_directory() . '/inc/schema-jsonld.php';
   ```
3. Sesuaikan bagian bertanda **TODO** di file: slug halaman cabang, URL menu/reservasi, foto, logo, telepon. Output otomatis ke `<head>` via hook `wp_head` (prioritas 20).

## Apa yang dikeluarkan (per jenis halaman)
- **Homepage** → `Organization` (di-skip otomatis bila Yoast/Rank Math aktif, agar tidak dobel).
- **Halaman cabang** → `Restaurant` (+ `BreadcrumbList`). Cocok dengan pola "halaman cabang terpisah" (lihat `dynamic/07-cabang.md` Opsi C).
- **Halaman FAQ** → `FAQPage`, di-parse dari konten FAQ asli (`<details>/<summary>` — sama dgn `sections/11-faq.html`). Jika tak ada Q&A → tidak output (anti-mengarang).

## Aturan locked (WAJIB)
- **TANPA `aggregateRating`** — disengaja (lihat `schema/README.md`). Angka **4.9 / 26.586** = teks brand, **jangan** dimasukkan ke schema.
- **Restaurant hanya untuk 5 cabang `active`.** Cabang **upcoming** (Jakarta, Bandung ke-2): **tanpa schema** sampai benar-benar buka.
- **Bali = domain terpisah** `https://kurniaseafoodbali.com/`: URL Restaurant Bali memakai domain itu, dengan `sameAs` **silang** ke domain utama (`kurniaseafood.co.id`), dan sebaliknya. Telepon kanonik **…5758**.
- `priceRange` = `"$$"` (indikator saja) — **TANPA harga menu**.
- `servesCuisine` = `["Seafood","Indonesian"]`. `parentOrganization` = "Kurnia Group". `amenityFeature` ringkas per cabang (sinkron `branches.js` `facilities`).
- Data cabang `verify:true` (Yogyakarta, Bandung, Bali) → **konfirmasi tim** sebelum produksi.

## Catatan SEO go-live
- Hapus `noindex` (lihat checklist README).
- Pasang `Organization.logo` dengan URL logo resmi di Media Library.
- Submit sitemap (GSC + Bing) setelah go-live.
