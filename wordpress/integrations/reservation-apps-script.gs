/**
 * Kurnia Seafood — Penyimpan Reservasi (PROTOTIPE) via Google Apps Script
 * =========================================================================
 * Menerima POST JSON dari section Reservasi (preview) lalu meng-append baris
 * ke Google Sheet. Ini PROTOTIPE untuk membuktikan alur di preview statis
 * (GitHub Pages). Implementasi PRODUKSI sebenarnya nanti dibangun di WordPress.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * LANGKAH DEPLOY (dilakukan oleh PEMILIK — butuh login akun Google):
 *   1. Buat Google Sheet BARU. Gunakan Sheet KHUSUS UJI (bukan data pelanggan asli).
 *   2. Di Sheet: menu  Extensions → Apps Script.
 *   3. Hapus kode contoh, TEMPEL seluruh isi file ini, lalu Save.
 *   4. Klik  Deploy → New deployment.
 *        - Select type: Web app
 *        - Execute as:  Me
 *        - Who has access:  Anyone
 *   5. Authorize akses (izinkan). Salin URL Web App (berakhiran /exec).
 *   6. Tempel URL itu ke  wordpress/data/config.js → RESERVATION_ENDPOINT.
 *
 * CATATAN:
 *   - Hanya URL Web App publik yang dipakai klien (memang dirancang publik).
 *   - JANGAN menaruh kredensial/secret di repo.
 *   - Data dikirim via POST body (bukan query string) agar tidak ter-log di URL.
 * ========================================================================= */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var d = {};
    try { d = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { d = {}; }

    // Header sekali di baris pertama.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Cabang', 'Nama', 'Tanggal', 'Jam', 'Jumlah Tamu', 'Pre-order', 'Sumber']);
    }

    sheet.appendRow([
      new Date(),
      d.cabang   || '',
      d.nama     || '',
      d.tanggal  || '',
      d.jam      || '',
      d.jumlah   || '',
      d.preorder || '',
      d.sumber   || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Sekadar info bila URL dibuka via browser (GET).
function doGet() {
  return ContentService.createTextOutput('Kurnia Seafood reservation endpoint (gunakan POST).');
}
