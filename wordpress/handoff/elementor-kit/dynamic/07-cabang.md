# 07 · CABANG (tab switcher detail per kota) (DINAMIS · render #7)

**Section id:** `#cabang` · **Sumber markup:** `wordpress/sections/11-cabang.html` (main)
**Sumber data:** `wordpress/data/branches.js` → `window.KS_BRANCHES` (hanya `status:"active"`)

## Apa yang ditampilkan
Tab per kota (5 cabang aktif). Panel tiap cabang: nama, tagline, alamat, jam, telepon, daftar fasilitas, foto, **peta Google Maps embed** (dari `geo{lat,lng}` asli), CTA "Reservasi di {kota}" (→ `#reservasi`).

## Cara di WordPress (3 opsi)

### Opsi A — Cepat (pakai data JS apa adanya)
Tempel `data/config.js`+`data/branches.js` (sekali) lalu `sections/11-cabang.html` ke widget HTML. Tab + peta + routing reservasi sudah jalan dari JS bawaan.

### Opsi B — CPT "Cabang" + Loop + Elementor Tabs
- Buat tiap cabang sebagai post CPT "Cabang".
- Bangun **Tabs** (widget Elementor Tabs/Loop) — tiap tab = satu kota.
- Di panel: dynamic tags untuk alamat/jam/telepon/fasilitas (repeater) + Image `foto`.
- **Peta:** widget Google Maps Elementor pakai `geo.lat`,`geo.lng` (atau alamat).

### Opsi C — Halaman cabang terpisah (paling SEO-friendly)
- Satu halaman per cabang (`/cabang/<slug>/`) → cocok dengan **schema Restaurant per halaman** (`schema-notes.md`).
- Section Locations (#5) "Lihat detail" → link ke halaman cabang.

## Aturan locked
- Peta = embed Google Maps dari `geo` **asli** (bukan placeholder).
- Hanya cabang `active` di sini; upcoming **tidak** muncul.
- SLUG konsisten (kunci proxy ulasan). `verify:true` → konfirmasi tim.
- Telepon/WA kanonik **…5758**. Pemilihan tab **tidak** auto-scroll (scroll via anchor `#cabang` aksi user).
