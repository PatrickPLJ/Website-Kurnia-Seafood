# Daftar Foto Placeholder — WAJIB diganti foto resmi Kurnia

Situs live diblokir dari jaringan build, jadi **semua foto di preview memakai
placeholder pihak ketiga (Unsplash)**. Foto placeholder ditandai di kode dengan
`data-placeholder="true"` + komentar `<!-- TODO: ganti dengan foto resmi Kurnia -->`,
dan tiap file data mencetak peringatan di console browser.

Ganti dengan foto milik Kurnia (situs lama, Google Business Profile, atau IG
resmi `@kurnia.seafood`). Sumber data foto terpusat di `data/menu.js`,
`data/promos.js`, dan markup section terkait.

## Prioritas (fitur baru)
| Section | File | Jumlah | Cara ganti |
|---------|------|--------|------------|
| Hero (carousel background) | `sections/01-hero.html` | 5 | ganti `background-image:url(...)` tiap `.ks-hero__slide` |
| Spotlight terbaru | `data/promos.js` | 1+/item | ganti `image` tiap entri promo |
| New Menu | `data/menu.js` (isNew) | 3 | ganti `image` + isi `name`/`desc` asli (hapus `placeholder`) |
| Signature | `data/menu.js` (signature) | 5 | ganti `image` dgn foto hidangan resmi |

## Foto sample lama (juga sebaiknya diganti)
Section berikut masih memakai foto contoh Unsplash: `08-galeri.html`,
`05-kabar.html`, `04-review.html`, `07-tentang.html`, `11-cabang.html`
(map = embed Google Maps asli, bukan foto, tidak perlu diganti).

## Catatan
- **Peta** di Locations & Cabang memakai embed Google Maps dari koordinat asli
  (`geo` di `branches.js`) — bukan placeholder.
- Setelah mengganti, hapus atribut `data-placeholder` / flag `placeholder:true`
  agar peringatan console berhenti.
