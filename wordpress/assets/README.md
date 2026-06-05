# Logo & Aset

## Logo Kurnia Seafood

File logo **belum disertakan** di repo ini (dikirim via chat, bukan sebagai
file). Taruh logomu di sini agar muncul di preview & blok section:

```
wordpress/assets/kurnia-logo.png        ← logo full-color (untuk latar putih)
wordpress/assets/kurnia-logo-white.png  ← (opsional) versi putih untuk latar gelap
```

Blok `01-hero.html` dan `09-footer.html` sudah memanggil `assets/kurnia-logo.png`.
Jika file belum ada, otomatis tampil teks "Kurnia Seafood" sebagai cadangan.

## Cara pakai di WordPress (Elementor) — REKOMENDASI

Jangan pakai path file ini di WordPress. Sebaiknya:

1. **Upload logo** ke WordPress → Media Library.
2. Salin **URL**-nya (mis. `https://situskamu.com/wp-content/uploads/2026/06/kurnia-logo.png`).
3. Di blok `01-hero.html` & `09-footer.html`, ganti
   `src="assets/kurnia-logo.png"` dengan URL tersebut.

### Latar gelap (hero & footer)
Logo full-color punya teks navy yang tenggelam di latar gelap. Dua pilihan:
- **Pakai versi PUTIH** logo (dari brand guideline: "full white" untuk latar
  berwarna). Ganti src ke logo putih, lalu **hapus** class `ks-logo--white`.
- **Atau** biarkan class `ks-logo--white` aktif — ia otomatis mengubah logo
  jadi siluet putih lewat CSS filter (praktis, tanpa file baru).

### Alternatif paling rapi (Elementor)
Untuk header sebenarnya, pakai widget **Site Logo / Image** bawaan Elementor,
dan hapus bagian `<nav class="ks-nav">…</nav>` di `01-hero.html` agar tidak dobel.
