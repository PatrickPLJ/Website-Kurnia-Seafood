# 04 · SIGNATURE GATEWAY (STATIS + strip foto · render #4)

**Section id:** `#signature` · **Sumber markup:** `wordpress/sections/14-signature.html` (main)
**Sumber data:** `wordpress/data/config.js` → `KS_CONFIG.SIGNATURE_URL` · `wordpress/data/menu.js` → `window.KS_MENU` (filter `signature:true`, hanya untuk strip foto)

> **Berubah sejak landing page Signature tayang.** Section ini bukan lagi grid menu
> andalan; sekarang menjadi **pintu masuk** ke landing page **Kurnia Seafood Signature**
> (`kurniaseafood.co.id/kurnia-signature/`). Desain grid lama masih ada di histori git
> (`main` sebelum merge PR #4).

## Apa yang ditampilkan
Blok navy `#0A2644` + gold `#C29B44` (palet resmi Signature, lihat `brand/SIGNATURE-BRAND.md`):

1. Kicker "Sebuah Persembahan Baru" + **logo resmi Kurnia Seafood Signature**.
2. Teaser satu kalimat + baris kota: **Bandung · November 2026 ✦ Jakarta · Akhir 2026**.
3. Strip **3 foto hidangan** (nama di overlay, **TANPA HARGA**) — diambil dari item
   `signature:true` berfoto resmi; strip disembunyikan bila data tidak ada.
4. Satu tombol **"Discover Kurnia Signature"** → `KS_CONFIG.SIGNATURE_URL`.

## Cara di WordPress
1. Tempel `data/config.js` + `data/menu.js` (sekali), lalu `sections/14-signature.html` ke widget HTML.
2. Di `config.js` isi `SIGNATURE_URL: "/kurnia-signature/"`.
3. Ganti `src` logo dengan URL media library (file: `signature/assets/logo-kurnia-signature-dark.png`).
4. Foto strip: ganti `image` di `menu.js` dengan URL media library (lihat `PLACEHOLDERS.md`).

Strip foto boleh dibuat dengan Loop Grid (CPT "Menu", filter `is_signature = true`, 3 item,
rasio 4:3, nama di overlay) bila tidak memakai widget HTML.

## Aturan locked
- **TANPA HARGA.**
- Nama hidangan di `menu.js` = kanonik (Ikan Bakar Kurnia, Kepiting Saus Kurnia, Udang Saus
  Kurnia, Kepiting Saus Garlic Caramel, King Crab Sultan) — jangan diubah tanpa konfirmasi tim.
- Menu lengkap outlet Signature **tidak** dikelola di sini: ada di menu online
  `menu-signature.kurniaseafood.co.id` (repo `Menu-Digital-Kurnia-Seafood-Signature`).
- Alamat lengkap outlet Signature tetap internal sampai buka — tampilkan area saja.
