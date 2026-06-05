# Kurnia Seafood — Web Visual Kit

Mempercantik tampilan website **Kurnia Seafood** agar lebih menarik bagi calon
pelanggan, mengikuti **brand guideline resmi** (tagline *"The Happiest Seafood
Time!"*) dengan nuansa **ceria, ramah, dan premium**.

Brand: biru `#0056AC` dominan · merah `#D80000` aksen · latar putih ·
font **Alexandria** + **Crimson Pro**. Detail di [`brand/BRAND.md`](brand/BRAND.md).

---

## 👉 Deliverable aktif: `wordpress/` (WordPress + Elementor)

Website tetap di **WordPress**; kit ini hanya mempercantik visualnya — **tanpa
ganti platform**.

```
wordpress/
├─ PANDUAN-ELEMENTOR.md   # langkah pasang (BACA INI DULU)
├─ kurnia-brand.css       # gaya global: warna, font, tombol, form
├─ PREVIEW.html           # buka di browser untuk lihat hasil semua section
└─ sections/              # 5 blok siap tempel ke widget "HTML" Elementor
   ├─ 01-hero.html
   ├─ 02-menu-favorit.html
   ├─ 03-keunggulan.html
   ├─ 04-testimoni.html
   └─ 05-cta-reservasi.html
```

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
