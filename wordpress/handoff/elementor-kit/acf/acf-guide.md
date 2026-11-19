# Panduan ACF — Cabang & Menu

Supaya tim bisa mengelola konten lewat **form admin WordPress** (bukan edit file JS).

## Pasang
1. Aktifkan plugin **ACF** (Advanced Custom Fields; free cukup, PRO untuk repeater "fasilitas").
2. Daftarkan CPT: pasang `cpt-register.php` (lihat header file) → muncul menu **Cabang** & **Menu**.
3. Import field: **ACF → Tools → Import Field Groups** → unggah `acf-fields-cabang.json` lalu `acf-fields-menu.json`.
4. Isi konten: **Cabang → Tambah Cabang**, **Menu → Tambah Menu**.

> Repeater **fasilitas** butuh **ACF PRO**. Tanpa PRO: ganti field `fasilitas` jadi `textarea` (satu fasilitas per baris) lalu `explode("\n")` saat render.

## CPT "Cabang" — pemetaan field ↔ data lama (`data/branches.js`)
| ACF field (name) | branches.js | Catatan |
|---|---|---|
| (Judul post) | `name` (atau `city`) | Judul = nama tampilan |
| `slug` | `slug` | **kunci proxy ulasan** — `yogyakarta\|semarang\|bandung\|bali\|surabaya` (upcoming: `jakarta-pondok-indah`, `bandung-2`). Jaga konsisten. |
| `kota` | `city` | |
| `nama_lengkap` | `name` | |
| `status` | `status` | `active` / `upcoming` |
| `foto` | `photo` | foto resmi (`assets/cabang-*.webp` di main) |
| `whatsapp` | `whatsapp` | format wa.me, **…5758** |
| `phone_display` | `phoneDisplay` | |
| `alamat` | `address` | |
| `geo_lat` / `geo_lng` | `geo.lat` / `geo.lng` | peta + schema |
| `jam_buka` | `hours` | teks; untuk schema → OpeningHoursSpecification |
| `tagline` | `tagline` | |
| `fasilitas` (repeater) | `facilities[]` | |
| `area` | `area` | hanya upcoming |
| `opening_estimate` | `openingEstimate` | hanya upcoming |
| `url` | — (baru) | URL halaman cabang (schema). Bali = domain terpisah |
| `same_as` | — (baru) | sameAs (IG; Bali silang ke domain utama) |
| `place_id` | `placeId` | kosong & tidak dipakai klien (proxy simpan di server) |
| `verify` | `verify` | `true` (Yogyakarta, Bandung, Bali) = **konfirmasi tim** |

### Catatan slug (penting)
SLUG harus **identik** dengan kunci proxy ulasan Google. Salah slug → ulasan cabang tidak muncul. Jangan ubah slug cabang yang sudah live tanpa memperbarui konfigurasi proxy.

## CPT "Menu" — pemetaan field ↔ `data/menu.js`
| ACF field (name) | menu.js | Catatan |
|---|---|---|
| (Judul post) | `name` | nama hidangan **kanonik** |
| `foto` | `image` | foto resmi (`assets/menu-*.webp`) |
| `deskripsi` | `desc` | |
| `is_baru` | `isNew` | tampil di New Menu |
| `is_signature` | `signature` | tampil di Signature |
| `placeholder` | `placeholder` | pengingat ganti foto |
| kategori (taxonomy `menu_kategori`) | — (baru) | mis. Seafood / Bakar / Pencuci Mulut |

> **TANPA field harga** — locked. Jangan menambah field/price di mana pun.

## Render di Elementor
Lihat file `dynamic/*.md` per section untuk langkah **Loop Grid** + dynamic tags.
