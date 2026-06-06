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
| `cabang-{yogyakarta,semarang,bandung,bali,surabaya}.webp` | branches.js `photo` (placeholder off) | ✅ tersambung (5/5) · **WebP** |
| `menu-king-crab-sultan.webp` | menu.js → King Crab Sultan | ✅ · **WebP** |
| `menu-udang-saus-kurnia.webp` | menu.js → Udang Saus Kurnia | ✅ · **WebP** |
| `menu-kepiting-garlic-caramel.webp` | menu.js → Kepiting Saus Garlic Caramel | ✅ · **WebP** |
| `menu-ikan-bakar-kurnia.webp` | menu.js → Ikan Bakar Kurnia | ✅ · **WebP** |
| `menu-baru-rahang-tuna.webp` | menu.js (New Menu) → Rahang Tuna | ✅ · **WebP** |
| `og-image.jpg` | build-preview.mjs OG_IMAGE + twitter:image | ✅ (tetap JPG, dikompres) — rasio masih **potret** |

### 🗜 Kompresi + WebP (selesai — branch `optimize/kompres-foto`)

10 foto tim asli (besar) dikompres & dikonversi ke **WebP** (lebar maks ~1400px,
kualitas ~80). File **original (.jpg/.png) TETAP disimpan** berdampingan; referensi
di `branches.js` (`photo`) & `menu.js` (`image`) menunjuk ke `.webp`. Hemat ~95%.

| Foto | Sebelum | Sesudah (.webp) |
|---|--:|--:|
| cabang-yogyakarta | 1,98 MB | 341 KB |
| cabang-semarang | 2,09 MB | 394 KB |
| cabang-bandung | 1,29 MB | 360 KB |
| cabang-bali | 1,66 MB | 157 KB |
| cabang-surabaya | 1,68 MB | 256 KB |
| menu-ikan-bakar-kurnia | 1,58 MB | 290 KB |
| menu-udang-saus-kurnia | 1,51 MB | 248 KB |
| menu-kepiting-garlic-caramel | 1,22 MB | 238 KB |
| menu-king-crab-sultan | 1,53 MB | 280 KB |
| menu-baru-rahang-tuna | 11,73 MB | 342 KB |
| **og-image.jpg** (tetap JPG) | 1,53 MB | 220 KB (1067×6000→**1067×1600**) |

> **og-image:** sengaja **tidak** dikonversi ke WebP (scraper sosial paling aman
> dengan JPG/PNG); hanya dikompres + di-resize sisi terpanjang ~1600px **in-place**.
> Original 4000×6000 hanya dapat diambil kembali dari **histori git**. Rasionya
> masih **potret** — idealnya tim menyediakan versi **landscape ~1200×630**
> (jangan di-crop otomatis dari yang potret).

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

### Saran optimasi
Foto cabang & signature/new-menu sudah **dikompres + WebP** (lihat tabel di atas).
Yang **belum**: 8 foto ekstra (platter/dessert 8–9 MB) — dibiarkan karena belum
dipetakan ke menu. `og-image` idealnya **landscape 1200×630** (sekarang potret
1067×1600 — tetap valid, tapi crop kurang ideal di kartu share).

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
