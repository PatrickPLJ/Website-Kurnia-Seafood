# Kurnia Seafood — Website Redesign

Redesign konsep website **Kurnia Seafood** sebagai restoran seafood **premium,
mewah, dan memorable**. Dibangun dengan arah desain *"Refined nautical
editorial"*: biru laut dalam, kertas gading hangat, ilustrasi **blueprint
line-art** seafood, font **Fraunces** + **Hanken Grotesk**, dengan merah brand
sebagai aksen tunggal yang berani.

Lihat panduan brand di [`brand/BRAND.md`](brand/BRAND.md).

## Dua versi (sesuai permintaan)

Landing page yang sama diimplementasikan dalam **dua stack** agar bisa
dibandingkan:

### 1. `html-tailwind/` — Static HTML + Tailwind
Satu file `index.html` yang langsung bisa dibuka di browser (Tailwind via Play
CDN + Google Fonts). Paling cepat untuk preview & deploy ke hosting statis
apa pun.

```bash
# Buka langsung
open html-tailwind/index.html        # macOS
xdg-open html-tailwind/index.html    # Linux

# atau jalankan server statis
npx serve html-tailwind
```

> Catatan: Tailwind Play CDN ditujukan untuk prototipe. Untuk produksi, gunakan
> versi Next.js (Tailwind sudah dikompilasi) atau build Tailwind secara lokal.

### 2. `nextjs/` — Next.js 14 + React + Tailwind (production-grade)
Versi terstruktur dengan komponen, `next/font` (font self-hosted), dan Tailwind
yang dikompilasi. Cocok untuk dikembangkan lebih lanjut (CMS, form reservasi
nyata, halaman tambahan).

```bash
cd nextjs
npm install
npm run dev      # http://localhost:3000
# produksi:
npm run build && npm run start
```

Struktur:
```
nextjs/
├─ app/
│  ├─ layout.tsx      # font (Fraunces + Hanken Grotesk), metadata
│  ├─ page.tsx        # menyusun seluruh section
│  └─ globals.css     # Tailwind + util kustom (grain, reveal, underline)
├─ components/
│  ├─ Header.tsx      # nav (transparan→solid saat scroll, menu mobile)
│  ├─ Hero.tsx        # hero + ilustrasi blueprint melayang
│  ├─ Marquee.tsx     # strip berjalan nama hidangan
│  ├─ Philosophy.tsx  # cerita + kartu blueprint "Anatomi Kesegaran"
│  ├─ Menu.tsx        # 6 hidangan signature
│  ├─ Experience.tsx  # galeri suasana (foto + fallback gradient)
│  ├─ Features.tsx    # 4 keunggulan + ikon line-art
│  ├─ Testimonial.tsx # kutipan + badge ulasan
│  ├─ Reservation.tsx # form reservasi (demo) + kontak
│  ├─ Footer.tsx
│  ├─ Reveal.tsx      # animasi reveal saat scroll (hormati reduced-motion)
│  └─ Logo.tsx        # monogram + wordmark
└─ tailwind.config.ts # token warna & font brand
```

## Section landing page
Hero → Marquee → Filosofi → Hidangan Signature → Pengalaman → Mengapa Kurnia →
Testimoni → Reservasi → Footer.

## Catatan
- **Foto suasana** memakai Unsplash dengan *fallback* gradient — jika gambar
  gagal dimuat, blok tetap terlihat sengaja didesain. Ganti dengan foto asli
  Kurnia Seafood saat tersedia.
- **Form reservasi** masih demo (belum terhubung backend).
- Teks (alamat, telp, harga, jam) adalah **placeholder** — mohon sesuaikan
  dengan data asli.
- Aksesibilitas: skip-link, label form, focus ring, alt text, dukungan
  `prefers-reduced-motion`.

## Status
Tahap pertama: **landing page** (bisnis: restoran). Berikutnya bisa dilanjut ke
halaman Menu lengkap, Tentang Kami, Galeri, dan integrasi reservasi.
