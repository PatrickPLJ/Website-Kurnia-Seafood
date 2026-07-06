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
| **CS Coaster** (CSCoster) | Display / judul besar / momen brand. **Italic = serif elegan yang sama dengan "Seafood" di logo** (script "Kurnia" = lettering custom pada artwork logo, bukan font) | File resmi di Drive (Regular, Italic, ReverseItalic — otf/ttf/woff/woff2) |
| **Crimson Pro** (serif) | Fallback display & body copy | Google Fonts (DNA induk) |
| **Alexandria** (sans) | Kicker caps letterspaced, nav, tombol, label kecil | Google Fonts (DNA induk) |

Stack CSS: `font-family:'CS Coaster','Crimson Pro',Georgia,serif`. `@font-face`
menunjuk ke `signature/assets/CSCoster-*.woff2` — halaman tetap tampil benar dengan
Crimson Pro sampai file font diupload.

## Logo

Lockup stacked resmi (file sudah di `signature/assets/`):
**kepiting siluet** (navy di latar putih / putih di latar navy — evolusi elegan dari
maskot kartun brand induk) → **"Kurnia"** script gold (CS Coaster) → **"Seafood"**
italic serif → **"SIGNATURE"** caps renggang. Varian lain di master PDF/AI:
lockup horizontal & **monogram "KS"** (favicon, divider, watermark).

| File | Peran |
|------|------|
| `Logo Kurnia Signature-01.jpg` / `-02.jpg` | Master latar putih / navy |
| `logo-kurnia-signature-dark.png` | Transparan utk latar gelap — dipakai di web |
| `logo-kurnia-signature-light.png` | Transparan utk latar terang (cadangan) |

> Wordmark di nav = replika tipografis lockup (script gold "Kurnia" + serif
> "Seafood" + caps "SIGNATURE") agar tetap tajam di ukuran kecil.

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
