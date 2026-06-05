/* =========================================================================
 * Kurnia Seafood — KONFIGURASI TERPUSAT (publik)
 * JANGAN taruh secret/kredensial di sini. Hanya URL publik yang boleh.
 * Tempel SEKALI di awal halaman (sebelum data & section lain).
 * ====================================================================== */
window.KS_CONFIG = {
  // URL Apps Script Web App (diakhiri /exec) untuk menyimpan reservasi ke Google Sheet.
  // Diisi oleh PEMILIK setelah deploy (lihat integrations/reservation-apps-script.gs).
  RESERVATION_ENDPOINT: "", // TODO: isi dengan URL Apps Script Web App dari pemilik

  // URL beranda — dipakai tombol "Kembali ke Beranda" pada section Reservasi
  // bila section berada di halaman terpisah (tanpa #hero di dokumen yang sama).
  HOME_URL: "/"
};
