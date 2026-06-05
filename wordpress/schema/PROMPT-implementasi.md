# Prompt untuk Claude Code — Implementasi Schema Markup Kurnia Seafood

> Salin seluruh teks di bawah garis ini ke Claude Code. Sebelum mulai, **letakkan file `kurnia-seafood-schema.md` di root project** (atau sebutkan path-nya), karena prompt ini mengacu ke file itu sebagai sumber data JSON-LD final.

---

## Konteks

Ini adalah situs WordPress (routing PHP) milik **Kurnia Seafood**, restoran seafood dengan 5 cabang: Yogyakarta, Semarang, Bandung, Bali (Tabanan), dan Surabaya. Tujuan tugas ini: menambahkan structured data (JSON-LD) ke situs tanpa merusak apa pun, dengan kode yang rapi dan mudah dirawat.

Yang harus dipasang:
1. **`Restaurant`** schema — satu per halaman cabang (5 cabang). Data final ada di `kurnia-seafood-schema.md`.
2. **`BreadcrumbList`** — di tiap halaman cabang (template ada di file yang sama).
3. **`Organization`** — hanya di homepage (template ada di file yang sama).
4. **`FAQPage`** — di halaman FAQ, di-generate dari Q&A asli yang sudah ada di situs (lihat bagian khusus FAQ di bawah).

## Langkah 0 — Investigasi dulu, JANGAN langsung edit

1. Identifikasi theme aktif. Kalau yang aktif adalah parent theme dan **belum ada child theme**, buat child theme dulu (`style.css` + `functions.php`) dan aktifkan lewat instruksi ke saya — jangan pernah edit parent theme langsung.
2. Cek plugin SEO yang aktif (Yoast / Rank Math / lainnya). **Penting:** plugin ini biasanya sudah auto-generate sebagian schema (LocalBusiness, Organization, BreadcrumbList). Catat schema apa saja yang sudah mereka keluarkan supaya kita tidak membuat duplikat.
3. Petakan slug/ID dari: homepage, 5 halaman cabang, dan halaman FAQ. Catat URL aktualnya. Saat ini URL cabang kemungkinan masih `/lokasi-yogya/`, `/lokasi-semarang/`, `/lokasi-bandung/`, `/kurnia-seafood-bali/`, `/lokasi-surabaya/` (struktur `/cabang/[kota]` mungkin belum live).
4. Laporkan temuan ini ke saya sebelum menulis kode, beserta rencana implementasimu.

## Langkah 1 — Struktur kode

- Buat file baru `inc/schema-jsonld.php` di dalam child theme.
- Include dari `functions.php` (mis. `require_once get_stylesheet_directory() . '/inc/schema-jsonld.php';`).
- Output JSON-LD lewat hook `wp_head` (priority normal).
- **Escaping wajib:** bangun schema sebagai array PHP, lalu keluarkan dengan `wp_json_encode( $data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE )` di dalam `<script type="application/ld+json">...</script>`. Jangan hardcode string JSON mentah tanpa escaping.

## Langkah 2 — Restaurant + Breadcrumb + Organization

- Ambil isi JSON-LD dari `kurnia-seafood-schema.md`. Di situ sudah lengkap: alamat, koordinat (`geo`), telepon, `openingHoursSpecification` per hari, `priceRange`, `servesCuisine`, dll. Gunakan nilai itu apa adanya.
- Buat mapping halaman → schema. Tentukan halaman aktif dengan `is_front_page()` dan `is_page()` (pakai slug/ID hasil Langkah 0), **bukan** mencocokkan URL string mentah.
  - Homepage → blok `Organization`.
  - Tiap halaman cabang → blok `Restaurant` cabang ybs **+** blok `BreadcrumbList` cabang ybs (ganti `position 3` sesuai kota).
- Untuk field `url` dan `@id`: pakai URL halaman yang **aktual saat ini** (hasil Langkah 0). Kalau struktur `/cabang/[kota]` belum live, gunakan URL `/lokasi-*` yang aktif, lalu beri komentar `// TODO: update ke /cabang/[kota] setelah restructure URL live`.
- Untuk `image`, `hasMenu`, dan `acceptsReservations`: file schema memakai placeholder. Coba temukan URL asli di situs (featured image halaman cabang, halaman menu, halaman reservasi). Kalau tidak ketemu, biarkan nilai placeholder dan tandai dengan komentar `// TODO`.

## Langkah 3 — FAQPage (dari konten FAQ ASLI)

**Jangan mengarang pertanyaan/jawaban.** FAQPage schema hanya boleh memuat Q&A yang benar-benar tampil di halaman FAQ publik.

1. Temukan halaman FAQ (cari page dengan slug/judul mengandung "faq" atau "tanya"). Kalau kontennya tersimpan di database (umumnya begitu di WordPress), ambil teksnya — gunakan WP-CLI bila tersedia, mis. `wp post get <ID> --field=content`, atau baca lewat fungsi WP di dalam kode.
2. Ekstrak tiap pasangan pertanyaan–jawaban persis seperti yang terlihat di halaman (teks jawaban harus sama dengan yang dilihat pengunjung; boleh strip tag HTML, jangan mengubah maknanya).
3. Generate satu blok `FAQPage` yang berisi semua Q&A tersebut, dan pasang **hanya** di halaman FAQ.

Format yang dipakai:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "<pertanyaan persis seperti di halaman>",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<jawaban persis seperti di halaman>"
      }
    }
  ]
}
```

Aturan FAQ:
- Idealnya generate `mainEntity` secara dinamis dari konten halaman (mis. parsing blok accordion/heading+paragraf), supaya schema otomatis ikut berubah kalau FAQ diedit. Kalau terlalu rapuh, boleh hardcode array Q&A dari konten yang ada sekarang, tapi beri komentar agar diperbarui saat FAQ berubah.
- Catatan ekspektasi (sampaikan juga ke saya): sejak 2023 Google membatasi tampilan rich result FAQ hanya untuk situs pemerintah/kesehatan, jadi untuk restoran FAQ schema kemungkinan **tidak** muncul sebagai rich snippet. Tetap berguna untuk pemahaman semantik & AI search, tapi jangan dijanjikan sebagai bintang/akordeon di hasil Google.

## Langkah 4 — Cegah duplikat schema

Berdasarkan temuan Langkah 0:
- Kalau plugin SEO sudah meng-output `Organization`, `LocalBusiness`, atau `BreadcrumbList`, **jangan** menambah yang dobel. Pilih satu sumber kebenaran: matikan output yang relevan di plugin, atau jangan keluarkan blok yang sudah dihasilkan plugin. Jelaskan pilihanmu ke saya.
- Target akhir: tiap halaman hanya punya satu set schema yang konsisten, tanpa entitas ganda.

## Langkah 5 — Verifikasi

- Pastikan tidak ada PHP error/warning (cek `debug.log` bila `WP_DEBUG` aktif).
- Pastikan tiap blok JSON-LD valid (bisa di-`json_decode` tanpa error).
- Render satu halaman cabang, homepage, dan halaman FAQ; konfirmasi script JSON-LD muncul sekali, dengan nilai yang benar.
- Beri saya instruksi singkat untuk validasi manual di **Google Rich Results Test** dan **validator.schema.org**.

## Aturan & batasan (penting)

- Jangan edit parent theme; pakai child theme.
- Jangan hardcode JSON mentah tanpa `wp_json_encode`/escaping.
- Jangan mengarang konten FAQ — hanya markup Q&A yang benar-benar tampil.
- **Jangan** menambahkan `aggregateRating` dari Google/pihak ketiga (melanggar pedoman Google, risiko manual action).
- Jangan menyentuh konfigurasi server, kredensial, atau melakukan deploy ke production. Berhenti di perubahan kode + commit lokal, lalu tunggu konfirmasi saya sebelum apa pun di-push/di-deploy.
- Pakai commit message yang jelas (mis. `feat(seo): add JSON-LD Restaurant/Breadcrumb/Organization/FAQ schema`).

## Definition of done

- [ ] Child theme aman (parent theme tidak disentuh).
- [ ] `inc/schema-jsonld.php` dibuat & di-include dari `functions.php`.
- [ ] 5 halaman cabang: `Restaurant` + `BreadcrumbList` benar & sesuai URL aktual.
- [ ] Homepage: `Organization`.
- [ ] Halaman FAQ: `FAQPage` dari Q&A asli.
- [ ] Tidak ada duplikat dengan plugin SEO.
- [ ] Semua JSON-LD valid, tidak ada PHP error.
- [ ] Laporan temuan + langkah validasi diberikan ke saya, tanpa deploy otomatis.
