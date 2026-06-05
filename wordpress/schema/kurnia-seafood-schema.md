# Schema Markup — Kurnia Seafood (per Cabang)

Schema `Restaurant` (subtipe dari `LocalBusiness`) untuk tiap cabang. **Pasang satu blok per halaman cabang** di dalam `<head>` halaman yang sesuai — jangan digabung dalam satu halaman.

Data NAP, koordinat, telepon, dan jam buka diambil dari situs resmi + Google Business Profile. Bagian yang perlu kamu sesuaikan ada di **Catatan Implementasi** di bawah.

---

## 1. Yogyakarta

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://kurniaseafood.co.id/cabang/yogyakarta/#restaurant",
  "name": "Kurnia Seafood Yogyakarta",
  "url": "https://kurniaseafood.co.id/cabang/yogyakarta/",
  "image": "https://kurniaseafood.co.id/wp-content/uploads/cabang-yogyakarta.jpg",
  "telephone": "+62274488000",
  "priceRange": "$$",
  "servesCuisine": ["Seafood", "Indonesian"],
  "acceptsReservations": "https://kurniaseafood.co.id/reservasi/",
  "hasMenu": "https://kurniaseafood.co.id/menu/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Laksda Adisucipto No.48B, Ngentak, Caturtunggal, Kec. Depok",
    "addressLocality": "Kabupaten Sleman",
    "addressRegion": "Daerah Istimewa Yogyakarta",
    "postalCode": "55281",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.783678,
    "longitude": 110.407989
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Thursday","Friday","Saturday"], "opens": "11:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "12:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "22:00" }
  ],
  "brand": { "@type": "Brand", "name": "Kurnia Seafood" },
  "parentOrganization": { "@type": "Organization", "name": "Kurnia Jatim Group" },
  "sameAs": ["https://www.instagram.com/kurnia.seafood/"]
}
</script>
```

---

## 2. Semarang

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://kurniaseafood.co.id/cabang/semarang/#restaurant",
  "name": "Kurnia Seafood Semarang",
  "url": "https://kurniaseafood.co.id/cabang/semarang/",
  "image": "https://kurniaseafood.co.id/wp-content/uploads/cabang-semarang.jpg",
  "telephone": "+6281339505758",
  "priceRange": "$$",
  "servesCuisine": ["Seafood", "Indonesian"],
  "acceptsReservations": "https://kurniaseafood.co.id/reservasi/",
  "hasMenu": "https://kurniaseafood.co.id/menu/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Kompol Maksum No.300, Peterongan, Kec. Semarang Selatan",
    "addressLocality": "Kota Semarang",
    "addressRegion": "Jawa Tengah",
    "postalCode": "50242",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.9992529,
    "longitude": 110.4338483
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "11:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "22:00" }
  ],
  "brand": { "@type": "Brand", "name": "Kurnia Seafood" },
  "parentOrganization": { "@type": "Organization", "name": "Kurnia Jatim Group" },
  "sameAs": ["https://www.instagram.com/kurnia.seafood/"]
}
</script>
```

---

## 3. Bandung

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://kurniaseafood.co.id/cabang/bandung/#restaurant",
  "name": "Kurnia Seafood Bandung",
  "url": "https://kurniaseafood.co.id/cabang/bandung/",
  "image": "https://kurniaseafood.co.id/wp-content/uploads/cabang-bandung.jpg",
  "telephone": "+6282121882122",
  "priceRange": "$$",
  "servesCuisine": ["Seafood", "Indonesian"],
  "acceptsReservations": "https://kurniaseafood.co.id/reservasi/",
  "hasMenu": "https://kurniaseafood.co.id/menu/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Prof. Dr. Sutami No.100, Sukarasa, Kec. Sukasari",
    "addressLocality": "Kota Bandung",
    "addressRegion": "Jawa Barat",
    "postalCode": "40152",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.8788783,
    "longitude": 107.5842693
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Thursday","Friday","Saturday"], "opens": "11:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "12:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "22:00" }
  ],
  "brand": { "@type": "Brand", "name": "Kurnia Seafood" },
  "parentOrganization": { "@type": "Organization", "name": "Kurnia Jatim Group" },
  "sameAs": ["https://www.instagram.com/kurnia.seafood/"]
}
</script>
```

---

## 4. Bali (Tabanan)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://kurniaseafood.co.id/cabang/bali/#restaurant",
  "name": "Kurnia Seafood Bali",
  "url": "https://kurniaseafood.co.id/cabang/bali/",
  "image": "https://kurniaseafood.co.id/wp-content/uploads/cabang-bali.jpg",
  "telephone": "+6281338555758",
  "priceRange": "$$",
  "servesCuisine": ["Seafood", "Indonesian"],
  "acceptsReservations": "https://kurniaseafood.co.id/reservasi/",
  "hasMenu": "https://kurniaseafood.co.id/menu/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. By Pass Tanah Lot, Beraban, Kec. Kediri",
    "addressLocality": "Kabupaten Tabanan",
    "addressRegion": "Bali",
    "postalCode": "82121",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.6068436,
    "longitude": 115.1092288
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "11:00", "closes": "21:00" }
  ],
  "brand": { "@type": "Brand", "name": "Kurnia Seafood" },
  "parentOrganization": { "@type": "Organization", "name": "Kurnia Jatim Group" },
  "sameAs": ["https://www.instagram.com/kurnia.seafood/"]
}
</script>
```

---

## 5. Surabaya

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://kurniaseafood.co.id/cabang/surabaya/#restaurant",
  "name": "Kurnia Seafood Surabaya",
  "url": "https://kurniaseafood.co.id/cabang/surabaya/",
  "image": "https://kurniaseafood.co.id/wp-content/uploads/cabang-surabaya.jpg",
  "telephone": "+6281385375758",
  "priceRange": "$$",
  "servesCuisine": ["Seafood", "Indonesian"],
  "acceptsReservations": "https://kurniaseafood.co.id/reservasi/",
  "hasMenu": "https://kurniaseafood.co.id/menu/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Kombes Pol. Moh. Duryat No.4, Embong Kaliasin, Kec. Tegalsari",
    "addressLocality": "Kota Surabaya",
    "addressRegion": "Jawa Timur",
    "postalCode": "60271",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.2684478,
    "longitude": 112.7400955
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday"], "opens": "10:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "11:00", "closes": "22:00" }
  ],
  "brand": { "@type": "Brand", "name": "Kurnia Seafood" },
  "parentOrganization": { "@type": "Organization", "name": "Kurnia Jatim Group" },
  "sameAs": ["https://www.instagram.com/kurnia.seafood/"]
}
</script>
```

---

## Bonus 1 — BreadcrumbList (template, pasang di tiap halaman cabang)

Ganti `position 3` sesuai kota. Contoh untuk Yogyakarta:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://kurniaseafood.co.id/" },
    { "@type": "ListItem", "position": 2, "name": "Cabang", "item": "https://kurniaseafood.co.id/cabang/" },
    { "@type": "ListItem", "position": 3, "name": "Yogyakarta", "item": "https://kurniaseafood.co.id/cabang/yogyakarta/" }
  ]
}
</script>
```

## Bonus 2 — Organization (pasang di homepage saja)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kurniaseafood.co.id/#organization",
  "name": "Kurnia Seafood",
  "url": "https://kurniaseafood.co.id/",
  "logo": "https://kurniaseafood.co.id/wp-content/uploads/logo-kurnia-seafood.png",
  "parentOrganization": { "@type": "Organization", "name": "Kurnia Jatim Group" },
  "sameAs": ["https://www.instagram.com/kurnia.seafood/"]
}
</script>
```

---

## Catatan Implementasi

**Penempatan**
- Satu blok `Restaurant` per halaman cabang, di `<head>` (atau sebelum `</body>`). Jangan menaruh kelima cabang di satu halaman.
- Di WordPress: kalau pakai Rank Math / Yoast, plugin itu sudah auto-generate sebagian schema. Pilih salah satu agar tidak dobel — **(a)** matikan LocalBusiness bawaan plugin lalu inject JSON-LD ini manual (mis. lewat WPCode / Insert Headers and Footers, set per halaman), atau **(b)** isi field LocalBusiness di plugin dengan data ini. Jangan dua-duanya aktif.
- BreadcrumbList: kalau plugin breadcrumb sudah mengeluarkan schema sendiri, tidak perlu dobel.

**Yang perlu kamu ganti / verifikasi**
- `image` — ganti dengan URL foto asli tiap cabang (idealnya foto bangunan/interior, lebar ≥1200px).
- `hasMenu` & `acceptsReservations` — samakan dengan URL final (struktur `/menu` dan `/reservasi`).
- `url` & `@id` — aku pakai struktur `/cabang/[kota]`. Kalau restructure belum live (sekarang masih `/lokasi-yogya/`, `/lokasi-semarang/`, dst.), pakai URL yang aktif dulu, lalu update saat URL baru jalan.
- `telephone` — nomor diambil dari Google Business Profile. **Bandung perlu dicek**: GBP menampilkan +62 821-2188-2122, sedangkan halaman Kontak situs mencantumkan +62 813-7240-5758. Samakan keduanya demi konsistensi NAP. Yogya yang aku pakai adalah nomor landline GBP (+62 274 488000); kalau mau pakai nomor WA, samakan juga di GBP.
- `openingHoursSpecification` — jam diambil per hari dari GBP, termasuk keunikan (Rabu buka 12:00 di Yogya & Bandung, Bali tutup 21:00, Surabaya Senin–Selasa buka 10:00). Cek kalau ada yang sudah berubah.

**Kenapa tidak ada `aggregateRating`**
Rating Google tiap cabang tinggi (4.5–4.9 dengan ribuan ulasan), tapi sengaja **tidak** aku masukkan ke schema. Menandai rating dari pihak ketiga (Google) seolah-olah milik sendiri melanggar pedoman Google dan berisiko manual action. Bintang rating tetap muncul di hasil pencarian lewat Google Business Profile, jadi tidak perlu dipaksakan via schema. Kalau nanti situs punya sistem ulasan sendiri (yang dikumpulkan langsung di kurniaseafood.co.id), baru `aggregateRating` boleh ditambahkan.

**Validasi**
Setelah dipasang, cek tiap halaman di Google Rich Results Test dan Schema Markup Validator (validator.schema.org) untuk memastikan tidak ada error/warning.
