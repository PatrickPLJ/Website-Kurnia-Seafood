/* =========================================================================
 * Kurnia Seafood — DATA MENU (New Menu + Signature)
 * Dipakai oleh section New Menu (isNew) & Signature (signature). TANPA HARGA.
 *
 * FOTO: semua `image` di bawah = PLACEHOLDER pihak ketiga (Unsplash) karena
 * foto resmi belum tersedia → placeholder:true. WAJIB diganti foto resmi Kurnia.
 * Lihat daftar di wordpress/PLACEHOLDERS.md.
 * ====================================================================== */
window.KS_MENU = [

  /* ---- SIGNATURE / HERO MENUS (kandidat dari deck investor — milik Kurnia) ---- */
  { name: "Ikan Bakar Kurnia",                 desc: "Ikan segar dibakar dengan bumbu spesial khas Kurnia.", signature: true,  isNew: false, image: "assets/menu-ikan-bakar-kurnia.webp", placeholder: false },
  { name: "Kepiting Saus Kurnia",              desc: "Kepiting bakau, saus rahasia racikan Kurnia.",          signature: true,  isNew: false, image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=800&q=72", placeholder: true },
  { name: "Udang Saus Kurnia",                 desc: "Udang segar berbalut saus khas Kurnia, gurih-manis.",   signature: true,  isNew: false, image: "assets/menu-udang-saus-kurnia.webp", placeholder: false }, // nama kanonik
  { name: "Kepiting Saus Garlic Caramel",      desc: "Kepiting dengan karamel bawang putih yang harum.",      signature: true,  isNew: false, image: "assets/menu-kepiting-garlic-caramel.webp", placeholder: false }, // nama kanonik
  { name: "King Crab Sultan",                  desc: "King crab premium dengan saus spesial khas Kurnia.",    signature: true,  isNew: false, image: "assets/menu-king-crab-sultan.webp", placeholder: false }, // nama kanonik

  /* ---- NEW MENU (placeholder — TODO: isi menu baru asli dari tim) ---- */
  { name: "Rahang Tuna", desc: "Rahang tuna panggang, bumbu khas Kurnia.", isNew: true, signature: false, image: "assets/menu-baru-rahang-tuna.webp", placeholder: false },
  { name: "Menu Baru 2", desc: "", isNew: true, signature: false, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=72", placeholder: true }, // TODO: isi menu baru asli dari tim
  { name: "Menu Baru 3", desc: "", isNew: true, signature: false, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=72", placeholder: true }  // TODO: isi menu baru asli dari tim
];

/* Pengingat placeholder foto (TIDAK tampil ke pengunjung). */
(function () {
  try {
    var n = (window.KS_MENU || []).filter(function (m) { return m.placeholder; }).length;
    if (n && window.console) console.warn("[Kurnia Seafood] " + n + " foto MENU masih placeholder — ganti dgn foto resmi (lihat PLACEHOLDERS.md).");
  } catch (e) {}
})();
