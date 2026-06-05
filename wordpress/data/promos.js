/* =========================================================================
 * Kurnia Seafood — DATA PROMO / SPOTLIGHT
 * Dipakai oleh section "Spotlight terbaru". Item dengan active:true & date
 * terbaru tampil paling atas. Jika tidak ada item aktif → section auto-hide.
 *
 * FOTO `image` = PLACEHOLDER pihak ketiga (placeholder:true) → ganti foto resmi.
 * date format: YYYY-MM-DD (untuk pengurutan "terbaru").
 * ====================================================================== */
window.KS_PROMOS = [
  // TODO: isi promo / menu baru / campaign ASLI dari tim. Contoh placeholder:
  {
    type: "promo",                 // "promo" | "menu" | "campaign"
    title: "Promo Spesial (contoh)",
    desc: "Teks promo/campaign terbaru tampil di sini. Ganti dengan konten asli dari tim.",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1200&q=72",
    date: "2026-06-01",
    ctaLabel: "Lihat Detail",
    ctaHref: "#",
    active: true,
    placeholder: true
  }
  // tambah item lain di sini; yang active & date terbaru otomatis jadi spotlight.
];

(function () {
  try {
    var n = (window.KS_PROMOS || []).filter(function (p) { return p.placeholder; }).length;
    if (n && window.console) console.warn("[Kurnia Seafood] " + n + " item PROMO masih placeholder — ganti dgn konten/foto asli (lihat PLACEHOLDERS.md).");
  } catch (e) {}
})();
