# 04 · SIGNATURE / HERO MENUS (DINAMIS · render #4)

**Section id:** `#signature` · **Sumber markup:** `wordpress/sections/14-signature.html` (main)
**Sumber data:** `wordpress/data/menu.js` → `window.KS_MENU` (filter `signature:true`)

## Apa yang ditampilkan
Grid kartu 3:4 gelap-premium berisi menu **andalan** (image-forward, **TANPA HARGA**). Auto-hide bila tak ada item `signature:true`.

5 item signature di `main` (nama **kanonik** — jangan diubah tanpa konfirmasi tim):
1. Ikan Bakar Kurnia — foto resmi (WebP)
2. Kepiting Saus Kurnia — **foto masih placeholder Unsplash** → [GANTI FOTO RESMI]
3. Udang Saus Kurnia — foto resmi
4. Kepiting Saus Garlic Caramel — foto resmi
5. King Crab Sultan — foto resmi

## Cara di WordPress (CPT + ACF + Loop Grid)
- **CPT "Menu" yang sama** dengan New Menu. Filter Loop Grid: `is_signature = true`.
- Loop item: Image = `foto` (object-fit cover), Heading overlay = `nama`. Tidak ada deskripsi panjang di kartu signature (judul saja di overlay).
- Kolom: 3 → 2 → 1.

### Alternatif cepat
Tempel `data/config.js`+`data/menu.js` (sekali) lalu `sections/14-signature.html` ke widget HTML.

## Aturan locked
- **TANPA HARGA.**
- Nama hidangan = kanonik; sinkron dengan schema bila menu dipakai di `hasMenu`.
