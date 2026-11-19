# Kurnia Seafood — Web Visual Kit

Mempercantik tampilan website **Kurnia Seafood** agar lebih menarik bagi calon
pelanggan. Mengikuti **brand guideline resmi** (warna + font Kurnia) dengan
**layout premium terinspirasi template *Bamzi*** (hero gelap elegan, daftar menu
+ foto, kartu ulasan gelap) — diadaptasi ke warna brand: hijau→**navy biru**,
oranye→**merah**.

Brand: biru `#0056AC` / navy gelap dominan · merah `#D80000` aksen ·
font **Crimson Pro** (judul serif) + **Alexandria** (kicker/tombol).
Detail di [`brand/BRAND.md`](brand/BRAND.md).

---

## 👉 Deliverable aktif: `wordpress/` (WordPress + Elementor)

Website tetap di **WordPress**; kit ini hanya mempercantik visualnya — **tanpa
ganti platform**.

```
wordpress/
├─ PANDUAN-ELEMENTOR.md   # langkah pasang (BACA INI DULU)
├─ kurnia-brand.css       # gaya global: warna, font, tombol, form
├─ PREVIEW.html           # buka di browser untuk lihat hasil semua section
├─ ks-reveal.html         # animasi reveal (tempel SEKALI di bawah halaman)
└─ sections/              # 10 blok siap tempel ke widget "HTML" Elementor
   ├─ 01-hero.html          # hero gelap + headline serif + foto besar
   ├─ 02-menu-hidangan.html # daftar menu (kiri) + foto (kanan)
   ├─ 03-menu-bakar.html    # foto (kiri) + daftar menu (kanan)
   ├─ 04-review.html        # Customer Review (kartu gelap)
   ├─ 05-kabar.html         # Kabar & Promo (3 kartu)
   ├─ 06-reservasi.html     # CTA reservasi (gelap)
   ├─ 07-tentang.html       # Tentang Kami (foto + cerita + statistik)
   ├─ 08-galeri.html        # Galeri foto (grid premium)
   ├─ 09-footer.html        # Footer navy (peta, jam, sosial, kontak)
   ├─ 10-faq.html           # FAQ (accordion)
   └─ 11-cabang.html        # Cabang (tab switcher 5 kota, info unik per kota)
data/branches.js            # sumber data tunggal cabang (WA, alamat, fasilitas)
schema/                     # JSON-LD structured data (drop-in WordPress)
```

`06-reservasi.html` = reservasi 3-langkah + branch selector (routing WhatsApp per
cabang); `07-tentang.html` memuat 3 Core Value (blok permanen). Keduanya + Cabang
membaca `data/branches.js` (pasang sekali — lihat PANDUAN Langkah 4c).

Urutan homepage yang disarankan: `01-hero → 07-tentang → 02-menu-hidangan →
03-menu-bakar → 08-galeri → 04-review → 05-kabar → 10-faq → 06-reservasi →
09-footer`. Animasi reveal: tempel `ks-reveal.html` **sekali** di bawah halaman.

**Mulai cepat:** buka `wordpress/PREVIEW.html` di browser untuk melihat hasilnya,
lalu ikuti `wordpress/PANDUAN-ELEMENTOR.md` untuk memasangnya.

> Logo **tidak** dimasukkan ke kode — dipasang langsung lewat Elementor dari file
> logo terpisah.

---

## 👉 `signature/` — Landing page **Kurnia Seafood Signature** (pra-opening)

Landing page untuk **Kurnia Seafood Signature** — destinasi premium seafood dining
(outlet baru Bandung–Citarum & Jakarta–Pondok Indah). Satu file mandiri
(`signature/index.html`): navy `#0A2644` + gold `#C29B44` + putih, font
**CS Coaster** (fallback Crimson Pro), 5 bahasa (ID · EN · 日本語 · 한국어 · 中文).

- **Tayang di:** `kurniaseafood.co.id/kurnia-signature/` — isi
  `signature/kurnia-signature-share.html` ditempel ke widget HTML Elementor.
  **Repo ini = sumber**: ubah `signature/index.html`, jalankan
  `node signature/build-share.mjs`, lalu tempel ulang hasilnya. Perubahan yang
  dibuat langsung di WordPress harus dibawa balik ke `index.html` supaya tidak
  tertimpa saat tempel ulang.
- **Widget kedua di WordPress:** halaman `/kurnia-signature/` berisi **dua** widget HTML.
  Yang pertama = isi `kurnia-signature-share.html` (yang ditempel ulang). Yang kedua = pill
  mengambang "Restoran keluarga · Kurnia Seafood" (`.kfp2-pill`, tautan ke situs utama)
  buatan tim — bukan bagian repo ini; **jangan dihapus atau ditimpa** saat tempel ulang.
- **Menu online:** tombol "Menu" / "Lihat Menu Lengkap" →
  `menu-signature.kurniaseafood.co.id` (repo `Menu-Digital-Kurnia-Seafood-Signature`),
  otomatis membawa `?lang=` sesuai bahasa halaman.
- **Form Priority Access:** POST ke `SIG.api` (backend `kurniaseafood.my.id`); nomor
  WhatsApp & alamat menu ada di blok `SIG` pada `<script>`.
- Brand kit: [`brand/SIGNATURE-BRAND.md`](brand/SIGNATURE-BRAND.md) · status aset:
  [`signature/assets/README.md`](signature/assets/README.md)
- Gerbang dari homepage: section `wordpress/sections/14-signature.html`
  (tombol "Discover Kurnia Signature" → `KS_CONFIG.SIGNATURE_URL`)
- Pratinjau repo: `signature/index.html` (GitHub Pages: `…/signature/`)

---

## Catatan

Prototipe awal `html-tailwind/` & `nextjs/` (eksplorasi "luxury navy", standalone)
sudah **dihapus** dari repo karena tidak dipakai & memuat konten contoh lama —
deliverable final = folder `wordpress/`. Bila perlu, keduanya masih bisa diambil
dari **histori git**.
