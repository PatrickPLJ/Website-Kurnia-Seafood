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

## Arsip: prototipe awal (tidak dipakai)

Folder `html-tailwind/` dan `nextjs/` adalah eksplorasi **arah pertama** (konsep
"luxury navy", standalone). Setelah arah final ditetapkan (**tetap WordPress** +
brand resmi yang ceria), keduanya **tidak lagi dipakai** dan hanya disimpan
sebagai referensi. Boleh dihapus kapan saja.
