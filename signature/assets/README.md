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

Logo terpasang di: hero + footer `signature/index.html`, dan gateway
`wordpress/sections/14-signature.html`. Wordmark nav = replika tipografis lockup
(script CS Coaster) agar tajam di ukuran kecil.

## 3. Placeholder yang masih WAJIB diganti sebelum live

| Item | Lokasi | Catatan |
|------|--------|---------|
| Foto hero (3 slide) & foto experience/private dining | `data-placeholder="true"` di index.html | Foto pihak ketiga (Unsplash) — ganti foto resmi outlet saat tersedia |
| Foto "Kepiting Saus Kurnia" | Section Dishes | Foto produk lain sudah memakai foto resmi lama (keputusan pemilik: pakai foto lama dulu) |
| Nomor WhatsApp priority list | Konstanta `SIG.wa` di `<script>` | Masih nomor pusat — ganti nomor resmi Signature |
| Endpoint form minat | Konstanta `SIG.endpoint` | Kosong = fallback WhatsApp. Isi URL Apps Script bila mau simpan ke Sheets |
| Jam operasional & dress code | Section Facts | Isi saat data outlet fix |
