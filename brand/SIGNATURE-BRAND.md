# Kurnia Seafood Signature — Panduan Brand (Ringkas)

Lini premium Kurnia Seafood. Sumber: **brand kit resmi** dari pemilik (master logo, palet
warna, font CS Coaster). Dokumen pengembangan logo dari konsultan bersifat internal dan
tidak disertakan di repo ini.

## Posisi & arah visual

Signature adalah lini tersendiri untuk pengalaman seafood yang lebih premium — bukan
pengganti brand induk Kurnia Seafood yang ceria dan kekeluargaan. Nuansanya **tenang dan
mewah**:

- kepiting tetap menjadi tanda pengenal, tetapi sebagai siluet sederhana (bukan maskot kartun);
- warna navy + gold;
- tipografi rapi dan elegan.

Di semua materi Signature: tanpa tanda seru, tanpa bahasa promo/diskon, tanpa maskot
kartun, tanpa merah–biru cerah dan tagline brand induk.

## Palet warna resmi

| Peran | Hex | RGB |
|-------|-----|-----|
| Navy (dominan) | `#0A2644` | 10 · 38 · 68 |
| Gold (aksen, "Kurnia" pada logo, CTA) | `#C29B44` | 194 · 155 · 68 |
| Putih | `#FFFFFF` | 255 · 255 · 255 |

Hanya tiga warna itu yang resmi. Di web dipakai **turunannya saja** (bukan warna baru):
navy lebih dalam `#061A30` / `#04101F` (band kontras, footer), navy kartu `#0E3155`,
gold terang `#D9BC7A` (teks gold berukuran kecil, agar kontras), gold gelap `#82672B`
(garis/teks gold di atas latar terang), krem `#F6F1E7` (teks panjang di atas navy, dan
latar satu-satunya band terang, "Warisan" — di sana teks memakai navy resmi `#0A2644`
dan navy pudar `#3D4F63`).

**Tidak dipakai:** merah `#D80000` dan biru cerah milik brand induk, serta warna status
hijau/merah. Pesan berhasil/gagal pada form memakai gold dan putih.

## Tipografi

| Font | Penggunaan | Sumber |
|------|------------|--------|
| **CS Coaster** Italic | Display: judul, nama hidangan, kutipan — sama dengan "Seafood" pada logo | Brand kit (file di `signature/assets/`) |
| **CS Coaster** Regular | Judul tegak (mis. huruf Latin dalam judul berbahasa 日本語 / 한국어 / 中文) | Brand kit |
| Crimson Pro (serif) | Teks paragraf; cadangan bila CS Coaster gagal dimuat | Google Fonts — pendamping untuk web, bukan bagian brand kit |
| Alexandria (sans) | Kicker huruf kapital renggang, navigasi, tombol, label kecil — senada dengan "SIGNATURE" pada logo | Google Fonts — pendamping untuk web |

Stack CSS: `font-family:'CS Coaster','Crimson Pro',Georgia,serif`. Tulisan script
**"Kurnia"** pada logo adalah lettering khas Kurnia (artwork), **bukan font** — jangan
ditiru dengan font lain; selalu pakai file logo.

## Logo & monogram

Lockup resmi (susun ke bawah): **siluet kepiting** → **"Kurnia"** script gold →
**"Seafood"** serif miring → **"SIGNATURE"** kapital renggang.

| Latar | Kepiting, "Seafood", "SIGNATURE" | "Kurnia" | File |
|-------|----------------------------------|----------|------|
| Navy / gelap | Putih | Gold | `signature/assets/logo-kurnia-signature-dark.svg` |
| Putih / terang | Navy | Gold | `signature/assets/logo-kurnia-signature-light.svg` |

**Monogram "Ks"** (script K + s kecil + aksen capit, gold): untuk ukuran kecil dan
penanda brand — favicon, bordir seragam, watermark, pembuka section.
File: `signature/assets/monogram-ks.svg`.

Aturan pakai:

- Selalu pakai file resmi (vektor diekstrak langsung dari master, tanpa digambar ulang).
- Jangan mengubah warna, proporsi, atau susunan; jangan memberi bingkai, bayangan tebal,
  atau efek lain. Beri ruang kosong di sekeliling logo.
- Monogram **tidak** diganti tulisan "KS" yang diketik.
- Di atas foto, pastikan ada lapisan navy yang cukup gelap di belakang logo.

## Tone visual web

- Navy dominan (dark theme) dengan satu band krem ("Warisan"); gold hanya untuk aksen
  penting: kicker, hairline, tombol CTA. Tombol bersudut siku (radius 0), bukan pil membulat.
- Tipografi serif besar; kicker Alexandria kapital renggang. Nama hidangan italic.
- Foto atmosferik gelap — bukan kolase piring terang.
- Motion pelan & tenang: crossfade, fade-up reveal. Hormati `prefers-reduced-motion`.
- Bahasa: Indonesia dengan aksen istilah Inggris ("Private Dining", "Chef's Selection",
  "Priority Access").

## Di mana brand ini dipakai di repo

- `signature/index.html` — landing page (tayang di `kurniaseafood.co.id/kurnia-signature/`).
- `wordpress/sections/14-signature.html` — gateway di homepage Kurnia Seafood (logo & monogram
  resmi; nama hidangan memakai CS Coaster bila file font tersedia, cadangan Crimson Pro).
- Menu online `menu-signature.kurniaseafood.co.id` ada di repo terpisah
  (`Menu-Digital-Kurnia-Seafood-Signature`) dan mengikuti buku menu cetak.
