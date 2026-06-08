# 12 · RESERVASI (3 langkah, branch-aware WhatsApp) (DINAMIS · render #12)

**Section id:** `#reservasi` · **Sumber markup LENGKAP & KANONIK:** `wordpress/sections/06-reservasi.html` (main)
**Sumber data:** `wordpress/data/branches.js` (routing WA per cabang, `status:"active"`) + `wordpress/data/config.js` (`RESERVATION_ENDPOINT`, `HOME_URL`).

## Alur (3 langkah)
1. **Cabang** — kartu pilih cabang (radiogroup, dari `KS_BRANCHES` aktif).
2. **Detail** — form: Nama (opsional), Tanggal* , Jam* (default 19:00), Jumlah tamu* (select).
3. **Konfirmasi** — Pre-order (opsional, textarea), ringkasan, tombol **Kirim via WhatsApp**, link "Kembali ke Beranda".

`*` = wajib. Tombol "Lanjut" nonaktif sampai field wajib tiap langkah terisi.

### Field form (paste-ready ada di `sections/06-reservasi.html`)
| id | label | tipe | wajib | catatan |
|----|-------|------|-------|---------|
| `ksNama` | Nama | text | tidak | autocomplete name |
| `ksTgl` | Tanggal | date | ya | min = hari ini (di-set JS) |
| `ksJam` | Jam | time | ya | default 19:00, step 900 |
| `ksJumlah` | Jumlah tamu | select | ya | 2 / 3–4 / 5–6 / 7–10 / 11–20 / 20+ (acara) |
| `ksMenu` | Pre-order | textarea | tidak | catatan tambahan |

### Routing WhatsApp per cabang
Tombol akhir membangun link runtime: `https://wa.me/{whatsapp cabang}?text={ringkasan ter-encode}`, di mana `{whatsapp}` diambil dari cabang terpilih di `branches.js` (kanonik **…5758**). Tidak ada nomor di-hardcode di markup.

> Placeholder WhatsApp umum (mis. FAQ `62000000000`) **[ISI NOMOR ASLI]**. Reservasi sendiri sudah per-cabang dari data — tidak perlu nomor manual.

## Penyimpanan reservasi (capture)
- `KS_CONFIG.RESERVATION_ENDPOINT` (di `config.js`, **TERISI** di `main`) = Google Apps Script Web App; section POST best-effort **sebelum** membuka WhatsApp. Bila kosong/gagal → tetap lanjut ke WA (tidak memblokir).
- Dikirim `mode:'no-cors'` (respons **tak terbaca** — wajar; verifikasi dari **baris baru di Google Sheet**, bukan dari website), `Content-Type: text/plain` (hindari preflight), `keepalive:true`.
- Field terkirim: `token, nama, cabang, tanggal, waktu, jumlah_tamu, catatan, sumber`.

### ⚠️ Token anti-spam — WAJIB dipahami
Saat ini ada **token anti-spam di FRONT-END**: **low-value & PUBLIK by design** (hanya menghalau bot kasar; **bukan** pengaman penuh). **Nilainya tidak ditulis di paket ini** — ada di `wordpress/data/config.js`/markup `main` dan disamakan di `EXPECTED_TOKEN` pada `integrations/reservation-apps-script.gs`. **Jangan** anggap ini keamanan.

## REKOMENDASI PRODUKSI (penting)
Pindahkan capture ke **proxy server-side PHP** di WordPress (REST route atau `admin-ajax`):
- Simpan ke DB/CRM/Sheet **dari server**, dengan **validasi + anti-spam server-side** (nonce WP, rate-limit, atau CAPTCHA).
- Jangan andalkan token front-end. Jangan taруh secret bernilai tinggi di klien.
- Setelah simpan sukses, redirect/buka WhatsApp cabang.

## Cara pasang
1. Muat **sekali** (urut): `data/config.js` → `data/branches.js`.
2. Tempel isi penuh `sections/06-reservasi.html` ke widget **HTML** di posisi render #12. (Form + 3 langkah + routing WA + capture sudah jadi.)
3. Set `HOME_URL` di `config.js` ke URL beranda situs (untuk tombol "Kembali ke Beranda" bila reservasi di halaman terpisah).

### Alternatif Elementor Forms
Bisa pakai widget **Elementor Form** (field sama) + action "Webhook"/PHP untuk simpan server-side, lalu redirect WhatsApp. Tetap routing nomor per cabang dari data Cabang.
