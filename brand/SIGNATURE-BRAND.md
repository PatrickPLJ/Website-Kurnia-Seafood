# Kurnia Seafood Signature — Panduan Brand (Ringkas)

Sub-brand kelas atas Kurnia Seafood untuk outlet fine dining. Berdasarkan brand kit
resmi **"Kurnia Seafood Signature"** yang disediakan pemilik (folder Google Drive:
`01 Logo - Kurnia Seafood Signature`, berisi subfolder Color / Font / Logo).

Positioning: **premium, tenang, seremonial** — sengaja berbeda register dari brand
induk yang ceria ("The Happiest Seafood Time!"). Tanpa tanda seru, tanpa bahasa
promo/diskon, tanpa merah-biru cerah berdampingan.

## Palet Warna Resmi

| Peran | Hex | RGB |
|-------|-----|-----|
| Navy (dominan) | `#0A2644` | 10 · 38 · 68 |
| Gold (aksen & CTA) | `#C29B44` | 194 · 155 · 68 |
| Putih | `#FFFFFF` | 255 · 255 · 255 |

**Merah `#D80000` TIDAK dipakai** — itu milik brand induk. Turunan yang dipakai di web
(derivasi, bukan warna resmi baru): navy dalam `#061A30` (band kontras), navy kartu
`#0E3155`, krem lembut `#F6F1E7` (teks panjang di atas navy, kontinuitas dengan section
signature lama), gold redup `#8A6D2F` (garis halus).

## Tipografi

| Font | Penggunaan | Sumber |
|------|------------|--------|
| **CS Coaster** (CSCoster) | Display / judul besar / momen brand | File resmi di Drive (Regular, Italic, ReverseItalic — otf/ttf/woff/woff2) |
| **Crimson Pro** (serif) | Fallback display, nama hidangan (italic), manifesto, body | Google Fonts (DNA induk) |
| **Alexandria** (sans) | Kicker caps letterspaced, nav, tombol, label kecil | Google Fonts (DNA induk) |

Stack CSS: `font-family:'CS Coaster','Crimson Pro',Georgia,serif`. `@font-face`
menunjuk ke `signature/assets/CSCoster-*.woff2` — halaman tetap tampil benar dengan
Crimson Pro sampai file font diupload.

## Logo

Tiga varian resmi (file di Drive, folder Logo):
1. **Lockup stacked** — "Kurnia Seafood" + "SIGNATURE" (halaman 1 PDF logo)
2. **Lockup horizontal** — "Kurnia Seafood SIGNATURE" satu baris (halaman 2)
3. **Monogram "KS"** — untuk favicon, divider, watermark (halaman 3)

File: `Logo Kurnia Signature-01.jpg`, `Logo Kurnia Signature-02.jpg`, master
`Logo Kurnia Signature.ai` / `.pdf`.

> Logo belum ada di repo (lihat `signature/assets/README.md`). Sampai diupload,
> wordmark direplika sementara via CSS/tipografi dengan tanda `data-placeholder`.

## Tone Visual Web ("Midnight Ocean")

- Navy dominan penuh (dark theme), gold hanya untuk aksen penting: kicker, hairline,
  tombol CTA. Tombol tajam (radius 0), bukan pil membulat.
- Tipografi serif besar; kicker Alexandria caps renggang. Nama hidangan italic.
- Foto atmosferik gelap (ruang makan, seafood di atas es, tangan bekerja) — bukan
  kolase piring terang.
- Motion pelan & tenang: crossfade, fade-up reveal, hairline yang menggambar diri.
  Hormati `prefers-reduced-motion`.
- Bahasa: Indonesia dengan aksen istilah Inggris fine dining ("Private Dining",
  "Chef's Selection", "Priority List").

> Sumber: brand kit Drive pemilik + riset desain 26 website premium (Truluck's,
> Ocean Prime, Milos, Saint Peter, Koral Kempinski, Merah Putih, Seribu Rasa,
> Starbucks Reserve, dst.) — ringkasan keputusan di README bagian signature/.
