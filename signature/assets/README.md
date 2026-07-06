# signature/assets — Aset yang perlu diupload

Halaman `signature/index.html` sudah berfungsi penuh dengan fallback, tapi butuh
file-file berikut dari brand kit resmi (folder Google Drive
**"01 Logo - Kurnia Seafood Signature"**) supaya tampil final.
Upload lewat github.com → *Add file → Upload files* ke folder `signature/assets/`.

## 1. Font CS Coaster (dari Drive: `Font/CS Coaster/`)

Nama file HARUS persis seperti ini (sudah dirujuk `@font-face` di index.html):

| File | Wajib? |
|------|--------|
| `CSCoster-Regular.woff2` | ✅ wajib |
| `CSCoster-Italic.woff2` | ✅ wajib |
| `CSCoster-Regular.woff` | opsional (fallback browser lama) |
| `CSCoster-Italic.woff` | opsional |

Sebelum font ada → halaman otomatis memakai **Crimson Pro** (tidak rusak).

## 2. Logo Signature (dari Drive: `Logo/`)

| File | Dipakai untuk |
|------|---------------|
| `logo-kurnia-signature.png` (atau `.jpg` dari `Logo Kurnia Signature-01.jpg`) | Nav + footer |

> Disarankan ekspor **PNG transparan** (atau SVG) dari master `.ai` — JPG punya
> background kotak. Kalau hanya ada JPG, pilih versi yang backgroundnya navy.
> Sebelum logo ada → wordmark tampil sebagai tipografi CSS (bertanda `data-placeholder`).

## 3. Placeholder lain yang WAJIB diganti sebelum live

| Item | Lokasi di index.html | Catatan |
|------|----------------------|---------|
| Foto hero (3 slide) | `.sig-hero__slide` (`data-placeholder="true"`) | Foto pihak ketiga (Unsplash) — ganti foto resmi outlet/hidangan Kurnia |
| Foto experience & private dining | `data-placeholder="true"` | Sama seperti di atas |
| Nomor WhatsApp priority list | Konstanta `SIG.wa` di blok `<script>` | Masih memakai nomor pusat placeholder — ganti nomor resmi Signature |
| Endpoint form minat | Konstanta `SIG.endpoint` | Kosong = form menampilkan fallback WhatsApp. Isi URL Apps Script (pola sama dengan `wordpress/integrations/reservation-apps-script.gs`) |
| Jam operasional & dress code | Section Facts | Masih "menyusul/TBD" — isi saat data outlet fix |

Foto menu signature TIDAK perlu diupload — sudah memakai foto resmi dari
`../wordpress/assets/` (satu repo).
