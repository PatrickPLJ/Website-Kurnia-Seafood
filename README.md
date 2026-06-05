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
└─ sections/              # 8 blok siap tempel ke widget "HTML" Elementor
   ├─ 01-hero.html          # hero gelap + headline serif + foto besar
   ├─ 02-menu-hidangan.html # daftar menu (kiri) + foto (kanan)
   ├─ 03-menu-bakar.html    # foto (kiri) + daftar menu (kanan)
   ├─ 04-review.html        # Customer Review (kartu gelap)
   ├─ 05-kabar.html         # Kabar & Promo (3 kartu)
   ├─ 06-reservasi.html     # CTA reservasi (gelap)
   ├─ 07-tentang.html       # Tentang Kami (foto + cerita + statistik)
   └─ 08-galeri.html        # Galeri foto (grid premium)
```

Urutan homepage yang disarankan: `01-hero → 07-tentang → 02-menu-hidangan →
03-menu-bakar → 08-galeri → 04-review → 05-kabar → 06-reservasi`.

**Mulai cepat:** buka `wordpress/PREVIEW.html` di browser untuk melihat hasilnya,
lalu ikuti `wordpress/PANDUAN-ELEMENTOR.md` untuk memasangnya.

> Logo **tidak** dimasukkan ke kode — dipasang langsung lewat Elementor dari file
> logo terpisah.

---

## Arsip: prototipe awal (tidak dipakai)

Folder `html-tailwind/` dan `nextjs/` adalah eksplorasi **arah pertama** (konsep
"luxury navy", standalone). Setelah arah final ditetapkan (**tetap WordPress** +
brand resmi yang ceria), keduanya **tidak lagi dipakai** dan hanya disimpan
sebagai referensi. Boleh dihapus kapan saja.
