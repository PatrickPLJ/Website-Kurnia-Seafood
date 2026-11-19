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
| Font `CSCoster-Regular.woff2` | `signature/assets/` | Lihat bagian 1 |
| Jam operasional & dress code | Section Facts | Isi saat data outlet fix |
| Tag `noindex` | `<head>` | Hapus saat halaman boleh diindeks Google |

> Setiap `index.html` berubah, jalankan `node signature/build-share.mjs` untuk
> memperbarui `kurnia-signature-share.html` (versi 1-file mandiri) — file itulah
> yang ditempel ke widget HTML di `kurniaseafood.co.id/kurnia-signature/`.
