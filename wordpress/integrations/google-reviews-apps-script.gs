/**
 * Kurnia Seafood — Proxy ULASAN GOOGLE (CONTOH) via Google Apps Script
 * =========================================================================
 * Memanggil Google Places Details API DI SISI SERVER lalu mengembalikan field
 * ulasan sebagai JSON untuk section "Kata Pelanggan" (preview statis).
 *
 * KENAPA PERLU PROXY:
 *   API key Google TIDAK BOLEH diletakkan di front-end (situs statis / klien).
 *   Siapa pun bisa membaca source dan menyalahgunakan key. Maka Places API
 *   dipanggil dari server (Apps Script), dan key disimpan di Script Properties —
 *   BUKAN di repo, BUKAN di komentar ini.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * BATAS RESMI API (penting — sampaikan ke tim agar ekspektasi benar):
 *   • Places Details mengembalikan MAKSIMAL 5 ulasan per lokasi.
 *   • Ulasan TIDAK bisa difilter/diurutkan "terbaik" sesuka kita
 *     (parameter reviews_sort terbatas: 'most_relevant' default atau 'newest').
 *   • Jangan menyimpan/meng-cache ulasan secara permanen sebagai milik sendiri;
 *     refresh berkala sesuai kebijakan Google. (Cache pendek opsional di bawah.)
 *   • Wajib tampilkan nama penulis, foto profil bila ada, dan atribusi/link ke
 *     Google. Jangan mengubah/menyaring/memotong makna teks ulasan.
 *     (Aturan tampilan ditegakkan di sisi klien: sections/04-review.html.)
 *
 * ──────────────────────────────────────────────────────────────────────────
 * LANGKAH SETUP (dilakukan PEMILIK — butuh login akun Google):
 *   1. Google Cloud Console → buat/pilih project → AKTIFKAN "Places API"
 *      (Places API / Place Details). Pastikan billing aktif.
 *   2. Buat API key. RESTRICT key:
 *        - Application restriction: "IP addresses" (server) — biarkan untuk
 *          Apps Script (panggilan keluar dari server Google), ATAU "None" bila
 *          tidak bisa membatasi IP; JANGAN pakai "HTTP referrers" untuk key ini
 *          karena dipakai server, bukan browser.
 *        - API restriction: izinkan HANYA "Places API".
 *   3. Ambil Place ID tiap cabang AKTIF via Google "Place ID Finder"
 *      (https://developers.google.com/maps/documentation/places/web-service/place-id),
 *      isi ke wordpress/data/branches.js → field placeId tiap cabang.
 *   4. Apps Script (script.google.com → New project), TEMPEL seluruh isi file ini.
 *   5. Project Settings → Script properties → tamb/isi:
 *        - GOOGLE_PLACES_API_KEY = <API key dari langkah 2>   (WAJIB; rahasia)
 *        - ALLOWED_PLACE_IDS     = <ID1,ID2,...>              (opsional tapi
 *          DISARANKAN: allowlist agar key tidak dipakai untuk query lokasi lain)
 *        - REVIEWS_LANG          = id                          (opsional)
 *   6. Deploy → New deployment → type "Web app":
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Authorize. Salin URL Web App (berakhiran /exec).
 *   7. Tempel URL itu ke wordpress/data/config.js → REVIEWS_ENDPOINT.
 *   8. Verifikasi: buka section "Kata Pelanggan" — ulasan asli + atribusi Google
 *      muncul; badge "CONTOH" hilang.
 *
 * KONTRAK (klien ↔ proxy):
 *   Request : GET {WebAppURL}/exec?ids=PLACEID1,PLACEID2,...
 *             (klien mengirim placeId dari branches.js; Place ID bukan rahasia)
 *   Response: { ok:true, places:{ "<placeId>": {
 *                 rating, userRatingsTotal,
 *                 reviews:[ { authorName, rating, text, relativeTime,
 *                             profilePhotoUrl, authorUrl } ] } } }
 *   Gagal   : { ok:false, error:"..." }  → klien menampilkan placeholder, bukan error.
 * ========================================================================= */

function doGet(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var apiKey = props.getProperty('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      return _json({ ok: false, error: 'GOOGLE_PLACES_API_KEY belum di-set di Script Properties.' });
    }

    var lang = props.getProperty('REVIEWS_LANG') || 'id';

    // Allowlist opsional: batasi Place ID yang boleh di-query agar key tidak
    // disalahgunakan untuk lokasi sembarang.
    var allowRaw = props.getProperty('ALLOWED_PLACE_IDS') || '';
    var allow = allowRaw.split(',').map(function (s) { return s.trim(); }).filter(Boolean);

    var idsRaw = (e && e.parameter && e.parameter.ids) || '';
    var ids = idsRaw.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    if (!ids.length) {
      return _json({ ok: false, error: 'Parameter "ids" (Place ID) kosong.' });
    }

    // Cache pendek (mis. 6 jam) — refresh berkala, JANGAN simpan permanen.
    var cache = CacheService.getScriptCache();

    var places = {};
    ids.forEach(function (placeId) {
      if (allow.length && allow.indexOf(placeId) === -1) {
        places[placeId] = { error: 'Place ID tidak ada di allowlist.' };
        return;
      }

      var cacheKey = 'rev_' + lang + '_' + placeId;
      var cached = cache.get(cacheKey);
      if (cached) { places[placeId] = JSON.parse(cached); return; }

      var url = 'https://maps.googleapis.com/maps/api/place/details/json'
        + '?place_id=' + encodeURIComponent(placeId)
        + '&fields=' + encodeURIComponent('rating,user_ratings_total,reviews')
        + '&reviews_no_translations=true'   // jangan ubah teks: ambil bahasa asli ulasan
        + '&language=' + encodeURIComponent(lang)
        + '&key=' + encodeURIComponent(apiKey);

      var resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
      var body = {};
      try { body = JSON.parse(resp.getContentText()); } catch (err) { body = {}; }

      if (body.status !== 'OK' || !body.result) {
        places[placeId] = { error: body.status || 'GAGAL', detail: body.error_message || '' };
        return;
      }

      var r = body.result;
      // Maksimal 5 ulasan/lokasi dari Google. Petakan APA ADANYA (teks tak diubah).
      var reviews = (r.reviews || []).map(function (rv) {
        return {
          authorName: rv.author_name || '',
          rating: rv.rating || 0,
          text: rv.text || '',                         // JANGAN diedit/disensor di server
          relativeTime: rv.relative_time_description || '',
          profilePhotoUrl: rv.profile_photo_url || '',
          authorUrl: rv.author_url || '',              // link ke profil/ulasan di Google
          source: 'Google'                             // label badge kartu (Places API = Google)
        };
      });

      var out = {
        rating: r.rating || null,
        userRatingsTotal: r.user_ratings_total || null,
        reviews: reviews
      };
      cache.put(cacheKey, JSON.stringify(out), 21600); // 6 jam
      places[placeId] = out;
    });

    return _json({ ok: true, places: places });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  }
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
