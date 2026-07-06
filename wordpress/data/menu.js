/* =========================================================================
 * Kurnia Seafood — DATA MENU (New Menu + Signature)
 * Dipakai oleh section New Menu (isNew) & Signature (signature). TANPA HARGA.
 *
 * FOTO: item signature (kecuali Kepiting Saus Kurnia) sudah memakai FOTO RESMI
 * dari assets/ (path relatif thd folder wordpress/ — saat pasang di WordPress
 * ganti ke URL media library, lihat PLACEHOLDERS.md). Sisanya masih PLACEHOLDER
 * pihak ketiga (Unsplash) → placeholder:true, WAJIB diganti foto resmi Kurnia.
 * ====================================================================== */
window.KS_MENU = [

  /* ---- SIGNATURE / HERO MENUS (kandidat dari deck investor — milik Kurnia) ---- */
  { name: "Ikan Bakar Kurnia",                 desc: "Ikan segar dibakar dengan bumbu spesial khas Kurnia.", signature: true,  isNew: false, image: "assets/menu-ikan-bakar-kurnia.jpg" },
  { name: "Kepiting Saus Kurnia",              desc: "Kepiting bakau, saus rahasia racikan Kurnia.",          signature: true,  isNew: false, image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=800&q=72", placeholder: true },
  { name: "Udang Saus Malaka",                 desc: "Udang segar berbalut saus Malaka gurih-manis.",        signature: true,  isNew: false, image: "assets/menu-udang-saus-malaka.jpg" },
  { name: "Kepiting Garlic Caramel",           desc: "Kepiting dengan karamel bawang putih yang harum.",      signature: true,  isNew: false, image: "assets/menu-kepiting-garlic-caramel.jpg" },
  { name: "Alaskan King Crab Saus Singapore",  desc: "King crab premium dengan saus Singapore.",             signature: true,  isNew: false, image: "assets/menu-king-crab-sultan.jpg" },

  /* ---- NEW MENU (placeholder — TODO: isi menu baru asli dari tim) ---- */
  { name: "Menu Baru 1", desc: "", isNew: true, signature: false, image: "https://images.unsplash.com/photo-1625943555435-d9d3a3f9d3f4?auto=format&fit=crop&w=800&q=72", placeholder: true }, // TODO: isi menu baru asli dari tim
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
