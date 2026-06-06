# Daftar Foto Placeholder — WAJIB diganti foto resmi Kurnia

Situs live diblokir dari jaringan build, jadi **semua foto di preview memakai
placeholder pihak ketiga (Unsplash)**. Foto placeholder ditandai di kode dengan
`data-placeholder="true"` + komentar `<!-- TODO: ganti dengan foto resmi Kurnia -->`,
dan tiap file data mencetak peringatan di console browser.

Ganti dengan foto milik Kurnia (situs lama, Google Business Profile, atau IG
resmi `@kurnia.seafood`). Sumber data foto terpusat di `data/menu.js`,
`data/promos.js`, dan markup section terkait.

## Status aset tim — audit 6 Jun 2026

Tim menyatakan "semua aset sudah diupload", **tetapi hasil verifikasi: belum ada
satu pun file foto** di repo (`wordpress/assets/` hanya berisi logo; tidak ada di
history git mana pun). Jadi **semua aset di bawah masih ❌ belum ada** dan tetap
placeholder. Begitu file benar-benar diupload (pakai nama persis di bawah), beri
tahu untuk disambungkan.

| Aset diharapkan | Taruh di | Sambung ke | Status |
|---|---|---|---|
| `cabang-yogyakarta.jpg` | `wordpress/assets/` | `data/branches.js` → yogyakarta `photo` (+ `photoPlaceholder:false`) | ❌ belum ada |
| `cabang-semarang.jpg` | `wordpress/assets/` | branches.js → semarang `photo` | ❌ belum ada |
| `cabang-bandung.jpg` | `wordpress/assets/` | branches.js → bandung `photo` | ❌ belum ada |
| `cabang-bali.jpg` | `wordpress/assets/` | branches.js → bali `photo` | ❌ belum ada |
| `cabang-surabaya.jpg` | `wordpress/assets/` | branches.js → surabaya `photo` | ❌ belum ada |
| `menu-king-crab-sultan.jpg` | `wordpress/assets/` | `data/menu.js` (signature) `image` | ❌ belum ada |
| `menu-udang-saus-kurnia.jpg` | `wordpress/assets/` | menu.js (signature) `image` | ❌ belum ada |
| `menu-kepiting-garlic-caramel.jpg` | `wordpress/assets/` | menu.js (signature) `image` | ❌ belum ada |
| `menu-baru-[nama].jpg` (variabel) | `wordpress/assets/` | menu.js (`isNew`) `image` | ❌ belum ada |
| `og-image.jpg` (≥1200px) | `wordpress/assets/` | `build-preview.mjs` → OG_IMAGE | ❌ belum ada |

Catatan audit:
- Cabang **upcoming** (Jakarta PI, Bandung ke-2): TIDAK pakai foto interior — tetap "Segera Hadir". Dilewati.
- ✅ Nama signature `data/menu.js` SUDAH direkonsiliasi ke nama kanonik: "King
  Crab Sultan", "Udang Saus Kurnia", "Kepiting Saus Garlic Caramel" (dish sama,
  hanya penamaan). "Ikan Bakar Kurnia" & "Kepiting Saus Kurnia" tetap.
- Saran optimasi: simpan foto sebagai **WebP** (atau sediakan `.webp` + `.jpg`)
  & lebar ~1200–1600px agar ringan; `og-image` minimal 1200px.

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
