# Daftar Foto Placeholder — WAJIB diganti foto resmi Kurnia

Situs live diblokir dari jaringan build, jadi **semua foto di preview memakai
placeholder pihak ketiga (Unsplash)**. Foto placeholder ditandai di kode dengan
`data-placeholder="true"` + komentar `<!-- TODO: ganti dengan foto resmi Kurnia -->`,
dan tiap file data mencetak peringatan di console browser.

Ganti dengan foto milik Kurnia (situs lama, Google Business Profile, atau IG
resmi `@kurnia.seafood`). Sumber data foto terpusat di `data/menu.js`,
`data/promos.js`, dan markup section terkait.

## Status aset tim — diperbarui 6 Jun 2026

Foto tim ditemukan ter-commit di branch `claude/modest-mendel-NEtWk` (commit
`628d2cb`), lalu **dibawa ke `main`** & disambungkan. Status:

| Aset | Sambung ke | Status |
|---|---|---|
| `cabang-{yogyakarta,semarang,bandung,bali,surabaya}.jpg` | branches.js `photo` (placeholder off) | ✅ tersambung (5/5) |
| `menu-king-crab-sultan.jpg` | menu.js → King Crab Sultan | ✅ |
| `menu-udang-saus-kurnia.jpg` | menu.js → Udang Saus Kurnia | ✅ (ada duplikat, lihat catatan) |
| `menu-kepiting-garlic-caramel.jpg` | menu.js → Kepiting Saus Garlic Caramel | ✅ |
| `menu-ikan-bakar-kurnia.jpg` | menu.js → Ikan Bakar Kurnia | ✅ |
| `menu-baru-rahang-tuna.png` | menu.js (New Menu) → Rahang Tuna | ✅ |
| `og-image.jpg` | build-preview.mjs OG_IMAGE + twitter:image | ✅ (4000×6000, ≥1200 ✓ — tapi rasio **potret**) |

### Masih placeholder (belum ada foto khusus)
- **Kepiting Saus Kurnia** (signature) — tidak ada file → tetap placeholder.
- **New Menu 2 & 3** — belum ada data/nama asli → placeholder.
- Hero carousel (5), Spotlight/promos, galeri/kabar/tentang — masih foto contoh.

### ⚠ Foto terupload tapi BELUM dipetakan (butuh info tim: nama dish + posisi)
`menu-platter-crab.png`, `menu-platter-lobster.png`, `menu-platter-gabungan.png`,
`menu-es-serut.png`, `menu-mango-sango.png`, `menu-pisang-ijo.png`,
`menu-rujak.png`, `menu-sorbet.png` — sudah ada di `assets/` tapi tidak ada di
daftar/menu.js. Beri tahu nama & section tujuannya untuk disambungkan.

### ✅ Duplikat (selesai)
Dulu ada dua file foto udang (versi kanonik & versi penamaan lama). File versi
lama sudah **dihapus**; "Udang Saus Kurnia" memakai `menu-udang-saus-kurnia.jpg`.

### Saran optimasi (jangan diubah tanpa minta)
Foto sangat besar (rahang-tuna **12 MB**, platter 8–9 MB, cabang 1–2 MB). Sebaiknya
kompres + **WebP**, lebar ~1200–1600px. `og-image` idealnya **landscape 1200×630**
(yang sekarang potret 4000×6000 — tetap valid, tapi crop kurang ideal di kartu share).

- Cabang **upcoming** (Jakarta PI, Bandung ke-2): TIDAK pakai foto — tetap "Segera Hadir". Dilewati.

## Prioritas (fitur baru)
| Section | File | Jumlah | Cara ganti |
|---------|------|--------|------------|
| Hero (carousel background) | `sections/01-hero.html` | 5 | ganti `background-image:url(...)` tiap `.ks-hero__slide` |
| Spotlight terbaru | `data/promos.js` | 1+/item | ganti `image` tiap entri promo |
| New Menu | `data/menu.js` (isNew) | 3 | ganti `image` + isi `name`/`desc` asli (hapus `placeholder`) |
| Signature | `data/menu.js` (signature) | 5 | ganti `image` dgn foto hidangan resmi |
| Foto cabang (Locations + tab Cabang) | `data/branches.js` (`photo`) | 5 | ganti `photo` tiap cabang aktif; set `photoPlaceholder:false` setelah diganti |
| Ulasan (Kata Pelanggan) | `data/google-reviews.js` | 6 | ulasan CONTOH (badge "CONTOH" + `data-placeholder="true"`). Tampil hanya selama proxy ulasan Google belum aktif. Aktifkan ulasan ASLI: isi `REVIEWS_ENDPOINT` (`data/config.js`) + `placeId` tiap cabang (`data/branches.js`) lalu deploy `integrations/google-reviews-apps-script.gs` |
| og:image (share/SEO) | `build-preview.mjs` (OG_IMAGE) | 1 | ganti URL foto resmi Kurnia (≥1200px) sebelum live |

## Foto sample lama (juga sebaiknya diganti)
Section berikut masih memakai foto contoh Unsplash: `08-galeri.html`,
`05-kabar.html`, `07-tentang.html`, `11-cabang.html`
(map = embed Google Maps asli, bukan foto, tidak perlu diganti).

Catatan: `04-review.html` (Kata Pelanggan) kini menampilkan ulasan Google —
foto profil datang dari Google (bila ada) atau jatuh ke inisial; tidak ada
foto Unsplash di sini. Selama proxy belum aktif, isinya ulasan CONTOH bertanda.

## Catatan
- **Peta** di Locations & Cabang memakai embed Google Maps dari koordinat asli
  (`geo` di `branches.js`) — bukan placeholder.
- Setelah mengganti, hapus atribut `data-placeholder` / flag `placeholder:true`
  agar peringatan console berhenti.
