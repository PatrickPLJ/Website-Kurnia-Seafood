# signature/assets — Aset brand Signature

Sumber: brand kit resmi dari konsultan brand (folder Google Drive
**"01 Logo - Kurnia Seafood Signature"**: `Color/`, `Font/CS Coaster/`, `Logo/`).
Ringkasan aturan pakainya ada di [`brand/SIGNATURE-BRAND.md`](../../brand/SIGNATURE-BRAND.md).

## 1. Font CS Coaster — ✅ lengkap

| File | Dipakai untuk |
|------|---------------|
| `CSCoster-Italic.woff2` + `.woff` | Judul, nama hidangan, momen brand (gaya utama halaman) |
| `CSCoster-Regular.woff2` + `.woff` | Judul tegak — mis. huruf Latin di judul saat bahasa 日本語 / 한국어 / 中文 |

Font berlisensi (Craft Supply Co) — pakai hanya untuk materi Kurnia Seafood Signature.

## 2. Logo & monogram — ✅ dari master resmi

| File | Keterangan |
|------|------------|
| `logo-kurnia-signature-dark.svg` | **Dipakai halaman** (nav, hero, footer) — vektor dari master, untuk latar navy/gelap |
| `logo-kurnia-signature-light.svg` | Vektor untuk latar putih/terang (cadangan) |
| `monogram-ks.svg` | **Monogram resmi "Ks"** (gold). Di halaman dipakai inline (`#sig-mono`) untuk favicon, pembuka manifesto, dan watermark |
| `logo-kurnia-signature-dark.png` / `-light.png` | Turunan PNG 1200×802 transparan dari vektor di atas — untuk media library WordPress (gateway homepage) |
| `Logo Kurnia Signature-01.jpg` / `-02.jpg` | Master JPG latar putih / navy (arsip, jangan dihapus) |

Vektor diekstrak apa adanya dari `Logo/Logo Kurnia Signature.pdf` di brand kit (tanpa
digambar ulang). Jangan mengganti monogram dengan tulisan "KS" biasa, mengubah warna
logo, atau memberi bingkai/efek tambahan.

## 3. Foto & data

Background (hero, private dining, priority access) dan foto dish 01–04 memakai
**foto resmi Kurnia** — versi terkompresi 900px ada di `assets/share/` (folder
`signature/` berdiri sendiri, tidak bergantung pada `wordpress/assets/`).
Foto dish 05 (Kepiting Saus Kurnia) diambil dari media library situs utama.
Saat foto suasana outlet Signature sudah tersedia, ganti background hero /
private dining di `index.html`.

Konfigurasi halaman ada di blok `SIG` pada `<script>` `index.html`:

| Item | Konstanta | Nilai sekarang |
|------|-----------|----------------|
| WhatsApp (GRO Signature) | `SIG.wa` | `6285195521228` |
| Backend form Priority Access | `SIG.api` | `https://kurniaseafood.my.id/api/v1/signature` |
| Menu online | `SIG.menu` | `https://menu-signature.kurniaseafood.co.id/` |

Yang masih perlu dilengkapi pemilik:

| Item | Lokasi | Catatan |
|------|--------|---------|
| Jam operasional & dress code | Section Facts | Isi saat data outlet fix |
| Tag `noindex` | `<head>` | Hapus saat halaman boleh diindeks Google |

> Setiap `index.html` berubah, jalankan `node signature/build-share.mjs` untuk
> memperbarui `kurnia-signature-share.html` (versi 1-file mandiri) — file itulah
> yang ditempel ke widget HTML di `kurniaseafood.co.id/kurnia-signature/`.
