/* =========================================================================
 * Kurnia Seafood — KONFIGURASI TERPUSAT (publik)
 * JANGAN taruh secret/kredensial di sini. Hanya URL publik yang boleh.
 * Tempel SEKALI di awal halaman (sebelum data & section lain).
 * ====================================================================== */
window.KS_CONFIG = {
  // URL Apps Script Web App (diakhiri /exec) untuk menyimpan reservasi ke Google Sheet.
  // Diisi oleh PEMILIK setelah deploy (lihat integrations/reservation-apps-script.gs).
  RESERVATION_ENDPOINT: "https://script.google.com/macros/s/AKfycbxJK34uYuHHG7JTEMTOEl-dmAyUZW43VHZGwQ3owxnjFT0H4DJuVUuJO3Q5A5KAk7Bf/exec", // Apps Script Web App pemilik (publik by design: hanya menambah baris, tidak membaca Sheet)

  // URL proxy ULASAN GOOGLE (Apps Script Web App, diakhiri /exec) yang memanggil
  // Google Places Details API di sisi server. WAJIB lewat proxy: API key Google
  // TIDAK BOLEH ada di front-end. Diisi PEMILIK setelah deploy
  // integrations/google-reviews-apps-script.gs. Selama kosong/gagal, section
  // "Kata Pelanggan" menampilkan ulasan CONTOH (placeholder), bukan error.
  REVIEWS_ENDPOINT: "", // TODO: isi URL proxy Apps Script ulasan Google dari pemilik

  // URL beranda — dipakai tombol "Kembali ke Beranda" pada section Reservasi
  // bila section berada di halaman terpisah (tanpa #hero di dokumen yang sama).
  HOME_URL: "/"
};
