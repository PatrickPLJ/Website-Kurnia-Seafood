# 05 · LOCATIONS (cabang ringkas + "Segera Hadir") (DINAMIS · render #5)

**Section id:** `#locations` · **Sumber markup:** `wordpress/sections/15-locations.html` (main)
**Sumber data:** `wordpress/data/branches.js` → `window.KS_BRANCHES`

## Apa yang ditampilkan
- **Cabang aktif** (`status:"active"`): kartu (foto, kota, nama) + 2 CTA: "Lihat detail" (→ `#cabang`) & "Reservasi" (→ `#reservasi`).
- **Upcoming** (`status:"upcoming"`): blok "Segera Hadir" (kota, area, estimasi buka) **tanpa peta/CTA/schema**. Auto-hide bila tak ada upcoming.

Field cabang (`branches.js`): `slug`, `city`, `name`, `status`, `photo`, `photoPlaceholder`, `whatsapp`, `phoneDisplay`, `address`, `geo{lat,lng}`, `hours`, `tagline`, `facilities[]`, (upcoming) `area`, `openingEstimate`, `placeId` (kosong, tak dipakai klien).

## Cara di WordPress (CPT "Cabang" + ACF + Loop Grid)
1. **CPT "Cabang"** + ACF (lihat `acf/cpt-register.php`, `acf/acf-fields-cabang.json`, `acf/acf-guide.md`).
2. **Loop Grid #1 — Aktif:** query CPT Cabang filter `status = active`. Loop item:
   - Image = `foto`; City = `kota`; Name = `nama`.
   - Button "Lihat detail" → URL halaman cabang (atau anchor `#cabang` + JS pemilih tab bila satu halaman).
   - Button "Reservasi" → `#reservasi` (atau URL halaman reservasi).
3. **Loop Grid #2 — Upcoming:** query filter `status = upcoming`. Tampilkan `kota`, `area`, "Segera Hadir — {openingEstimate}". **Jangan** render peta/CTA/schema.

### Alternatif cepat
Tempel `data/config.js`+`data/branches.js` (sekali, sebelum section) lalu `sections/15-locations.html` ke widget HTML.

## Aturan locked
- **SLUG cabang** (`yogyakarta|semarang|bandung|bali|surabaya`) = **kunci proxy ulasan** → jaga konsisten.
- Cabang `verify:true` (Yogyakarta, Bandung, Bali) = data pihak ketiga → **WAJIB dikonfirmasi tim**.
- Upcoming (Jakarta, Bandung ke-2) **tanpa schema/halaman penuh** sampai buka. Alamat upcoming = catatan INTERNAL (jangan render).
- WA per cabang berakhiran **…5758**.
