# Panduan Mempercantik Kurnia Seafood di WordPress + Elementor

Kit ini **tidak mengganti** website kamu — hanya mempercantik tampilannya
sesuai brand guideline resmi (warna + font Kurnia), dengan layout & nuansa
**premium** terinspirasi template *Bamzi* (hero gelap elegan, daftar menu +
foto, kartu ulasan gelap). Hijau→**navy biru brand**, oranye→**merah brand**.

Isi folder `wordpress/`:
- `kurnia-brand.css` — gaya global (warna + font + tombol + form).
- `sections/` — 8 blok section siap tempel:
  1. `01-hero.html` — hero gelap + headline serif + foto besar
  2. `02-menu-hidangan.html` — daftar menu (kiri) + foto (kanan)
  3. `03-menu-bakar.html` — foto (kiri) + daftar menu (kanan)
  4. `04-review.html` — **Customer Review** (kartu gelap, pengganti "Our Mission")
  5. `05-kabar.html` — Kabar & Promo (3 kartu)
  6. `06-reservasi.html` — CTA reservasi (gelap, penutup)
  7. `07-tentang.html` — Tentang Kami (foto + cerita + statistik)
  8. `08-galeri.html` — Galeri foto (grid premium)
- `PREVIEW.html` — buka di browser untuk melihat hasilnya sebelum dipasang.

> **Logo:** sengaja TIDAK dimasukkan ke kode. Pasang logo kamu (file terpisah)
> lewat Elementor seperti biasa (widget Logo/Image atau Site Settings).

---

## Langkah 1 — Set Warna Global (Site Settings)

Elementor → hamburger ☰ kiri atas → **Site Settings → Global Colors**.
Isi sesuai brand guideline:

| Slot | Warna | Hex |
|------|-------|-----|
| Primary | Biru | `#0056AC` |
| Secondary | Merah | `#D80000` |
| Text | Navy gelap | `#14263D` |
| Accent | Merah | `#D80000` |

Tambahkan custom color: Abu `#929497`, Latar `#F4F4F4`, Putih `#FFFFFF`.
(Guideline: **utamakan background putih** untuk hasil maksimal.)

## Langkah 2 — Set Font Global

Site Settings → **Global Fonts**:

| Slot | Font | Catatan |
|------|------|---------|
| Primary (judul) | **Crimson Pro** | Headline serif elegan (gaya premium) |
| Secondary (sub) | **Crimson Pro** | Sub-headline |
| Text (body) | **Crimson Pro** | Isi paragraf |
| Accent | **Alexandria** | Kicker, label, tombol (UPPERCASE) |

> Alexandria & Crimson Pro tersedia di Google Fonts (sudah aktif di Elementor).
> Jika tidak muncul: Elementor → Settings → pastikan **Google Fonts = Enable**.

## Langkah 3 — Pasang CSS Global

Buka isi `kurnia-brand.css`, lalu tempel ke salah satu:
- **Elementor Pro:** Site Settings → **Custom CSS** → paste → Update.
- **Tanpa Pro:** Appearance → **Customize → Additional CSS** → paste → Publish.

Ini otomatis merapikan: judul, paragraf, link, **tombol jadi pill brand**,
sudut membulat, bayangan lembut, dan field form.

> Tip: untuk menjadikan tombol Elementor merah (CTA), beri **CSS Class**
> `is-primary` pada tombol; untuk biru-garis beri `is-outline`.
> (Edit tombol → tab **Advanced → CSS Classes**.)

## Langkah 4 — Tempel Section Siap Pakai

Untuk tiap file di `sections/`:

1. Edit halaman dengan Elementor.
2. Tarik widget **"HTML"** ke posisi yang diinginkan.
3. Buka file section (mis. `01-hero.html`), **copy semua isinya**, paste ke
   widget HTML.
4. Update. Selesai — section langsung tampil rapi (CSS-nya sudah menyatu di
   dalam blok, jadi aman walau tema berbeda).

Urutan yang disarankan untuk homepage:
`01-hero` → `07-tentang` → `02-menu-hidangan` → `03-menu-bakar` → `08-galeri`
→ `04-review` → `05-kabar` → `06-reservasi`.
(Nomor file ≠ urutan tampil — ikuti urutan di atas.)

> **Navbar di hero:** blok `01-hero.html` memuat navbar opsional. Kalau tema
> WordPress kamu sudah menampilkan header sendiri, **hapus bagian
> `<nav class="ks-nav"> … </nav>`** agar tidak dobel, atau sembunyikan header
> tema pada halaman ini (Elementor → Page Settings → Hide Title/Header).

## Langkah 5 — Ganti Konten Placeholder

Yang **wajib** kamu sesuaikan (sekarang masih contoh):
- **Foto** — ganti `src="https://..."` dengan foto asli (atau upload ke Media
  Library lalu pakai URL-nya). Kalau foto gagal muncul, blok tetap rapi
  (ada latar gradient cadangan).
- **Menu & harga** — nama hidangan, deskripsi, harga di `02-menu-hidangan.html`
  dan `03-menu-bakar.html`.
- **Ulasan** — kutipan & nama pelanggan asli di `04-review.html`.
- **Kabar/Promo** — judul, tanggal, gambar di `05-kabar.html`.
- **Kontak** — nomor WhatsApp (`https://wa.me/62...`), telepon, alamat, jam
  buka di `06-reservasi.html`.
- **Logo & nav** — ganti teks "Kurnia Seafood" di `01-hero.html` dengan logomu.
- **Link tombol** — arahkan ke halaman menu / WhatsApp / form reservasi.

---

## Catatan
- Aksen **merah hanya untuk hal penting** (tombol pesan, highlight) — selebihnya
  biru & putih, sesuai proporsi brand (biru 50% · merah 30% · abu/latar 20%).
- Semua animasi menghormati `prefers-reduced-motion` (ramah aksesibilitas).
- Mau ditambah section lain (galeri, tentang kami, peta lokasi)? Tinggal minta.
