# Kurnia Seafood — PAKET ELEMENTOR (handoff developer)

Paket **bahan jadi** untuk merakit homepage Kurnia Seafood di **WordPress + Elementor** dengan visual setia ke preview kit. Disusun dari kode **branch `main`** (sumber kebenaran).

> ⚠️ Ini **BUKAN** template Elementor sekali-impor. Format `.json` template Elementor **hanya bisa dibuat dari dalam Elementor** — tidak dibuat di sini (jangan dicari/diimpor). Pendekatannya: **tempel HTML per section ke widget "HTML" Elementor**, muat CSS sekali, dan bagian dinamis pakai **CPT/ACF + Loop Grid**.
>
> Acuan struktur menyeluruh ada di `wordpress/handoff/homepage-structure.json` (blueprint).

---

## 1. Pendekatan singkat
- **Section STATIS** → tempel file dari `sections/NN-id.html` ke satu widget **HTML** (CSS-nya sudah menyatu/self-contained).
- **Section DINAMIS** → ikuti `dynamic/NN-id.md` (buat **CPT/ACF**, render dgn **Loop Grid**/dynamic tags). Tersedia juga jalur cepat "pakai data JS apa adanya".
- **CSS brand global** → muat `css/kurnia.css` **sekali** (font, token warna, polish tombol/form, animasi reveal).
- **Data tunggal** → file `wordpress/data/*.js` (di main) dipasang **sekali sebelum** section terkait, **urut `config.js` paling awal**.

## 2. Urutan rakit (PERSIS = ORDER di `build-preview.mjs`)
```
1.  01-hero        (STATIS)   sections/01-hero.html
2.  02-spotlight   (DINAMIS)  dynamic/02-spotlight.md
3.  03-new-menu    (DINAMIS)  dynamic/03-new-menu.md
4.  04-signature   (DINAMIS)  dynamic/04-signature.md
5.  05-locations   (DINAMIS)  dynamic/05-locations.md
6.  06-tentang     (STATIS)   sections/06-tentang.html
7.  07-cabang      (DINAMIS)  dynamic/07-cabang.md
8.  08-galeri      (STATIS)   sections/08-galeri.html
9.  09-review      (DINAMIS)  dynamic/09-review.md
10. 10-kabar       (STATIS)   sections/10-kabar.html
11. 11-faq         (STATIS)   sections/11-faq.html
12. 12-reservasi   (DINAMIS)  dynamic/12-reservasi.md
13. 13-footer      (STATIS)   sections/13-footer.html
```
> Header/nav ada di dalam `01-hero.html`. Footer paling bawah. **Animasi reveal** (JS) dimuat **sekali** di footer halaman (lihat §4).

## 3. Peta section: STATIS vs DINAMIS
| # | Section | Jenis | Cara | Sumber data |
|---|---------|-------|------|-------------|
| 1 | Hero | STATIS | tempel HTML (hapus `<nav>` bila ada header global) | — (foto placeholder) |
| 2 | Spotlight | DINAMIS | CPT "Promo" / data JS | `data/promos.js` |
| 3 | New Menu | DINAMIS | CPT "Menu" (`is_baru`) | `data/menu.js` |
| 4 | Signature | DINAMIS | CPT "Menu" (`is_signature`) | `data/menu.js` |
| 5 | Locations | DINAMIS | CPT "Cabang" (active+upcoming) | `data/branches.js` |
| 6 | Tentang | STATIS | tempel HTML | — |
| 7 | Cabang | DINAMIS | CPT "Cabang" (tabs/loop) | `data/branches.js` |
| 8 | Galeri | STATIS | tempel HTML / Elementor Gallery | — |
| 9 | Review | DINAMIS | proxy Google (fetch) | `REVIEWS_ENDPOINT` (config.js) + `google-reviews.js` |
| 10 | Kabar | STATIS | tempel HTML / Posts+Loop | — |
| 11 | FAQ | STATIS | tempel HTML (accordion) | — |
| 12 | Reservasi | DINAMIS | form + routing WA per cabang | `data/branches.js` + `data/config.js` |
| 13 | Footer | STATIS | tempel HTML / Footer global | — |

## 4. Cara memuat CSS (`css/kurnia.css`)
**Rekomendasi (paling robust): enqueue via child theme `functions.php`.**
```php
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'kurnia-brand',
        get_stylesheet_directory_uri() . '/assets/kurnia.css', // taruh kurnia.css di child theme
        array(),
        '1.0.0'
    );
} );
```
**Alternatif:** Elementor → **Site Settings → Custom CSS** → paste isi `kurnia.css` (butuh Elementor Pro untuk Custom CSS global; tanpa Pro pakai **Appearance → Customize → Additional CSS**).

**Trade-off singkat:**
- *Enqueue (functions.php):* paling stabil, ter-cache, ter-versioning, berlaku global, tahan update tema/plugin. Perlu akses file child theme.
- *Custom CSS Elementor/Customizer:* cepat tanpa FTP, tapi tersimpan di DB, bisa terbawa export/import yang tidak konsisten, dan Custom CSS global butuh Pro.

**Animasi reveal (JS):** `kurnia.css` sudah memuat CSS reveal. JS pendampingnya wajib dimuat **sekali** di footer — ambil bagian `<script>` dari `wordpress/ks-reveal.html` (main) → Elementor Pro **Site Settings → Custom Code → Location Footer**, atau widget HTML paling akhir.

> **Catatan:** tiap `sections/*.html` sudah self-contained (CSS menyatu). `kurnia.css` adalah lapisan **global** (font + token + polish + reveal) — keduanya saling melengkapi, aman dipakai bersama.

## 5. Aset gambar yang harus diunggah ke Media Library
Unggah dari `wordpress/assets/` (main), lalu **ganti path relatif `assets/...`** di data/markup dengan **URL Media Library** (atau enqueue folder assets di child theme).

**Sudah ada (resmi):**
- Logo: `kurnia-seafood-logo.webp`, `kurnia-seafood-logo@2x.webp`, `kurnia-seafood-logo.png`
- Cabang (5): `cabang-yogyakarta.webp`, `cabang-semarang.webp`, `cabang-bandung.webp`, `cabang-bali.webp`, `cabang-surabaya.webp` (ada juga `.jpg`)
- Menu signature/baru: `menu-ikan-bakar-kurnia.webp`, `menu-udang-saus-kurnia.webp`, `menu-kepiting-garlic-caramel.webp`, `menu-king-crab-sultan.webp`, `menu-baru-rahang-tuna.webp`
- OG: `og-image.jpg` (**portrait 4000×6000 → butuh varian landscape ~1200×630**, lihat checklist)

**Masih placeholder (Unsplash) — [GANTI FOTO RESMI]:** background Hero (5), galeri, kabar, tentang, spotlight; menu **"Kepiting Saus Kurnia"** + **"Menu Baru 2"** & **"Menu Baru 3"**. Lihat `wordpress/PLACEHOLDERS.md`.

## 6. Perbaikan WAJIB (sudah diterapkan / ditandai di paket)
- ✅ **Anchor footer "Menu"**: `#menu` → **`#new-menu`** (sudah diperbaiki di `sections/13-footer.html`).
- ⚠️ **WhatsApp FAQ** `62000000000` → ditandai **[ISI NOMOR ASLI]** di `sections/11-faq.html` (routing reservasi per cabang dari data Cabang **…5758**).
- ⚠️ **Footer**: alamat/telepon/email/peta/sosial = placeholder → **[ISI DATA ASLI]** (IG resmi: `https://www.instagram.com/kurnia.seafood/`).
- ⚠️ **Hero**: 5 foto background placeholder → **[GANTI FOTO RESMI]**.
- ⚠️ **Jam buka footer** statis & beda format dgn `branches.js` → **selaraskan** (atau hapus bila membingungkan).

## 7. Aturan locked (harus tercermin di hasil)
- **TANPA HARGA** menu di mana pun.
- **Ulasan = data Google asli via proxy** (atribusi Google + foto + rating + label cabang + fallback **CONTOH**); **tidak pernah fabrikasi**.
- **Tanpa `aggregateRating`**; **4.9 / 26.586** = teks brand (gabungan 5 cabang).
- **`noindex` wajib dihapus saat go-live** (sekarang untuk preview).
- **Cabang upcoming** (Jakarta, Bandung ke-2): "Segera Hadir" **tanpa peta/CTA/schema** sampai buka.
- **Bali** = domain terpisah `kurniaseafoodbali.com` + `sameAs` silang.
- **Slug cabang** = kunci proxy ulasan; jaga konsisten. `placeId` di `branches.js` kosong & tak dipakai klien.
- **WA per cabang** berakhiran **…5758**.
- Data **`verify:true`** (Yogyakarta, Bandung, Bali) = sumber pihak ketiga → **WAJIB dikonfirmasi tim**.
- **Jangan tulis nilai token/secret** ke mana pun; endpoint **dirujuk dari `wordpress/data/config.js`** (di main), bukan disalin.

## 8. Checklist PRA-GO-LIVE
- [ ] **Hapus `noindex`** dari head produksi.
- [ ] **og:image** varian **landscape ~1200×630** + host ke **domain produksi**.
- [ ] Isi semua placeholder: WhatsApp, alamat, email, peta, sosial; foto Hero/galeri/kabar/tentang + **"Kepiting Saus Kurnia"** & 2 **"Menu Baru"**.
- [ ] **Reservasi**: pindah ke **proxy server-side PHP** (REST/admin-ajax) + anti-spam server-side — jangan andalkan token front-end.
- [ ] Konfirmasi data cabang **`verify:true`** (Yogyakarta, Bandung, Bali).
- [ ] Pasang **schema** (`schema-notes.md`); pastikan **tanpa aggregateRating**, Bali domain terpisah, upcoming tanpa schema.
- [ ] Pasang **301 redirect** (URL lama → baru) + **submit sitemap** (GSC + Bing).
- [ ] **QA visual berdampingan** (preview kit vs WordPress) per section.

## 9. Isi paket (file list)
```
elementor-kit/
├─ README.md                     ← dokumen ini
├─ css/kurnia.css                ← brand global + reveal (dari kurnia-brand.css + ks-reveal.html)
├─ sections/                     ← STATIS, paste-ready (urut render)
│  ├─ 01-hero.html               (catatan: hapus <nav> bila header global; foto placeholder)
│  ├─ 06-tentang.html
│  ├─ 08-galeri.html
│  ├─ 10-kabar.html
│  ├─ 11-faq.html                (FIX: WA ditandai [ISI NOMOR ASLI])
│  └─ 13-footer.html             (FIX: #menu→#new-menu; data placeholder ditandai)
├─ dynamic/                      ← DINAMIS, panduan + snippet
│  ├─ 02-spotlight.md
│  ├─ 03-new-menu.md
│  ├─ 04-signature.md
│  ├─ 05-locations.md
│  ├─ 07-cabang.md
│  ├─ 09-review.md               (snippet fetch proxy Google + fallback CONTOH; endpoint dari config.js)
│  └─ 12-reservasi.md            (form + 3 langkah + routing WA + catatan token/anti-spam)
├─ acf/
│  ├─ cpt-register.php           (CPT Cabang & Menu + taksonomi)
│  ├─ acf-fields-cabang.json     (importable: ACF → Tools → Import)
│  ├─ acf-fields-menu.json       (importable; TANPA harga)
│  └─ acf-guide.md               (pemetaan field ↔ data lama + catatan slug)
└─ schema-notes.md               (pasang schema-jsonld.php + aturan locked)
```

## 10. Referensi sumber (di `main`)
- Urutan & meta: `wordpress/build-preview.mjs`
- Markup section: `wordpress/sections/*.html`
- Data & endpoint: `wordpress/data/*.js` (config, branches, menu, promos, google-reviews)
- Proxy server-side: `wordpress/integrations/google-reviews-apps-script.gs`, `reservation-apps-script.gs`
- Schema produksi: `wordpress/schema/inc/schema-jsonld.php`
- Blueprint: `wordpress/handoff/homepage-structure.json`
