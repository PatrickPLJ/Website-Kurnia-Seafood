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
 *   - TOKEN anti-spam: ganti nilai EXPECTED_TOKEN di bawah agar SAMA dengan token
 *     yang dikirim client (config repo: 'krn_69eb88584a427d27'). Ini token PUBLIK
 *     by design — hanya menghalau bot kasar, bukan pengaman penuh. POST tanpa token
 *     yang cocok akan DITOLAK (tidak ditulis ke Sheet).
 * ========================================================================= */

var EXPECTED_TOKEN = 'krn_69eb88584a427d27'; // samakan dengan client (anti-spam, low-value)

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Terima DUA format:
    //  - form-urlencoded → terbaca di e.parameter (dipakai client preview krn no-cors)
    //  - JSON            → terbaca di e.postData.contents
    var d = (e && e.parameter) ? e.parameter : {};
    if (e && e.postData && e.postData.contents) {
      try {
        var j = JSON.parse(e.postData.contents);
        for (var k in j) { if (d[k] == null || d[k] === '') d[k] = j[k]; }
      } catch (err) { /* bukan JSON (mis. form-urlencoded) → cukup pakai e.parameter */ }
    }

    // Tolak kiriman tanpa token yang cocok (anti-spam bot kasar).
    if (d.token !== EXPECTED_TOKEN) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: 'invalid token' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Header sekali di baris pertama.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Nama', 'Cabang', 'Tanggal', 'Waktu', 'Jumlah Tamu', 'Catatan', 'Sumber']);
    }

    sheet.appendRow([
      new Date(),
      d.nama        || '',
      d.cabang      || '',
      d.tanggal     || '',
      d.waktu       || d.jam      || '',  // 'waktu' (baru); fallback 'jam' (kompat lama)
      d.jumlah_tamu || d.jumlah   || '',  // 'jumlah_tamu' (baru); fallback 'jumlah'
      d.catatan     || d.preorder || '',  // 'catatan' (baru); fallback 'preorder'
      d.sumber      || ''
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
