# Schema Markup (JSON-LD) — Kurnia Seafood

Implementasi structured data sesuai `PROMPT-implementasi.md`, dengan data dari
`kurnia-seafood-schema.md`. Output: **Restaurant + BreadcrumbList** (per cabang),
**Organization** (homepage), **FAQPage** (halaman FAQ, dari konten asli).

> ⚠️ **Penting — belum di-deploy ke mana pun.** File ini hanya KODE di repo
> review. Tidak ada yang menyentuh `kurniaseafood.co.id`. Pemasangan ke situs
> live dilakukan manual oleh kamu/dev setelah review (lihat langkah di bawah).

## Isi folder
```
wordpress/schema/
├─ inc/schema-jsonld.php      ← file utama (drop ke child theme: inc/schema-jsonld.php)
├─ functions-snippet.php      ← baris require + contoh override untuk functions.php
├─ kurnia-seafood-schema.md   ← sumber data JSON-LD (referensi)
├─ PROMPT-implementasi.md     ← prompt asli (acuan)
└─ README.md                  ← file ini
```

## Cara pasang (di situs WordPress asli)
1. Pastikan pakai **child theme** (jangan edit parent theme). Kalau belum ada,
   buat child theme dulu.
2. Salin `inc/schema-jsonld.php` ke `wp-content/themes/<child>/inc/schema-jsonld.php`.
3. Tambahkan ke `functions.php` child theme:
   ```php
   require_once get_stylesheet_directory() . '/inc/schema-jsonld.php';
   ```
4. Sesuaikan bagian **TODO** (lihat checklist).
5. Tes di **staging** dulu, baru live.

## ✅ Checklist yang HARUS kamu sesuaikan/verifikasi (butuh akses WP asli)
Hal-hal ini tidak bisa saya kerjakan dari sini (repo ini bukan codebase WP asli,
dan situs live diblokir dari jaringan saya):

- [ ] **Slug halaman cabang.** Default dugaan: `lokasi-yogya`, `lokasi-semarang`,
      `lokasi-bandung`, `kurnia-seafood-bali`, `lokasi-surabaya`. Cek slug aktual;
      kalau beda, ubah kunci array di `ks_schema_branches()` atau isi `page_id`.
- [ ] **Slug halaman FAQ** (default `faq`). Ubah via filter `ks_schema_faq_slug`.
- [ ] **URL menu & reservasi** (`hasMenu`, `acceptsReservations`).
- [ ] **URL logo** untuk Organization.
- [ ] **Foto cabang** (`image`) — atau set featured image tiap halaman cabang.
- [ ] **Telepon Bandung** — samakan NAP: GBP `+62 821-2188-2122` vs situs
      `+62 813-7240-5758`. Pilih satu, samakan juga di Google Business Profile.
- [ ] **URL `/cabang/`** untuk breadcrumb posisi 2 (kalau halaman daftar cabang
      belum ada, sesuaikan/hapus).
- [ ] Kalau struktur URL berubah jadi `/cabang/[kota]`, tidak perlu ubah kode
      (URL diambil otomatis dari permalink halaman aktif).

## Anti-duplikat dengan plugin SEO
Kode mendeteksi **Yoast / Rank Math**. Jika aktif, **Organization & BreadcrumbList
tidak di-output** (karena plugin sudah mengeluarkannya) — biar tidak dobel.
`Restaurant` & `FAQPage` tetap keluar (plugin umumnya tidak membuat Restaurant
per cabang seperti ini).
- Mau ambil alih sepenuhnya dari kode ini? Matikan schema terkait di plugin, lalu:
  `add_filter('ks_schema_output_type', '__return_true');`
- Sebaliknya, kalau mau biarkan plugin yang handle Restaurant juga, hapus blok
  Restaurant atau isi LocalBusiness di plugin. **Pilih satu sumber kebenaran.**

## FAQPage — tidak mengarang
Q&A diambil **dari konten halaman FAQ asli**, dua jalur:
1. Filter manual `ks_schema_faq_items` (kalau diisi).
2. Parsing otomatis konten halaman (`<details>/<summary>`, atau heading h2–h4 +
   paragraf di bawahnya).

Kalau markup FAQ kamu tidak terbaca parser, **isi `ks_schema_faq_items` manual**
dengan Q&A yang persis tampil di halaman (lihat contoh di `functions-snippet.php`).
Jika tidak ada Q&A ditemukan, schema FAQ **tidak** dikeluarkan (bukan dikarang).

> Ekspektasi: sejak 2023 Google membatasi **rich result FAQ** hanya untuk situs
> pemerintah/kesehatan. Untuk restoran, FAQ schema kemungkinan **tidak** tampil
> sebagai akordeon/bintang di hasil Google — tetap berguna untuk pemahaman
> semantik & AI search, tapi jangan diharapkan jadi rich snippet.

## Tanpa `aggregateRating` (disengaja)
Rating Google (4.5–4.9) **tidak** dimasukkan ke schema — menandai rating pihak
ketiga sebagai milik sendiri melanggar pedoman Google (risiko manual action).
Bintang tetap muncul lewat Google Business Profile. `aggregateRating` baru boleh
ditambah kalau situs punya sistem ulasan sendiri.

## Verifikasi
- Sudah dicek di sini: **`php -l` lolos** (tanpa syntax error) & semua blok
  JSON-LD **valid** (bisa `json_decode`) dengan format jam sesuai data.
- Setelah dipasang di staging, cek tiap halaman di:
  - **Google Rich Results Test** — https://search.google.com/test/rich-results
  - **Schema Markup Validator** — https://validator.schema.org
- Pastikan tiap halaman hanya punya **satu** set schema (tidak dobel dgn plugin),
  dan tidak ada PHP error (`WP_DEBUG` → cek `debug.log`).
