# signature/assets — Status aset brand Signature

Sumber: brand kit resmi (folder Google Drive **"01 Logo - Kurnia Seafood Signature"**).
Upload lewat github.com → *Add file → Upload files* ke folder `signature/assets/`.

## 1. Font CS Coaster (dari Drive: `Font/CS Coaster/`)

| File | Status |
|------|--------|
| `CSCoster-Italic.woff2` + `.woff` | ✅ sudah ada |
| `CSCoster-Regular.woff2` | ❌ **BELUM — tolong upload** (dipakai judul section non-italic) |
| `CSCoster-Regular.woff` | opsional (fallback browser lama) |

Selama Regular belum ada, judul non-italic otomatis memakai **Crimson Pro** (tidak rusak).

## 2. Logo Signature — ✅ selesai

| File | Keterangan |
|------|------------|
| `Logo Kurnia Signature-01.jpg` | Master latar putih (sumber, jangan dihapus) |
| `Logo Kurnia Signature-02.jpg` | Master latar navy (sumber, jangan dihapus) |
| `logo-kurnia-signature-dark.png` | **Dipakai halaman** — transparan, marks putih+gold, utk latar gelap (di-generate dari -02) |
| `logo-kurnia-signature-light.png` | Transparan, marks navy+gold, utk latar terang (cadangan; dari -01) |

Logo terpasang di: nav, hero, footer `signature/index.html`, dan gateway
`wordpress/sections/14-signature.html`.

## 3. Foto & data

Seluruh background (hero, private dining, priority list) dan foto dish memakai
**foto resmi Kurnia** — versi terkompresi 900px ada di `assets/share/`.
Saat foto suasana outlet Signature sudah tersedia, ganti background hero /
private dining di `index.html`.

Yang masih perlu dilengkapi pemilik sebelum live:

| Item | Lokasi | Catatan |
|------|--------|---------|
| Foto "Kepiting Saus Kurnia" | Section Dishes (item 05, `data-placeholder`) | Satu-satunya foto pihak ketiga tersisa; fallback watermark KS bila gagal |
| Nomor WhatsApp priority list | Konstanta `SIG.wa` di `<script>` | Masih nomor pusat — ganti nomor resmi Signature |
| Endpoint form minat | Konstanta `SIG.endpoint` | Kosong = fallback WhatsApp. Isi URL Apps Script bila mau simpan ke Sheets |
| Jam operasional & dress code | Section Facts | Isi saat data outlet fix |

> Setiap `index.html` berubah, jalankan `node signature/build-share.mjs` untuk
> memperbarui `kurnia-signature-share.html` (versi 1-file mandiri).
