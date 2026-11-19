/* =========================================================================
 * Kurnia Seafood — ULASAN GOOGLE (SAMPEL/PLACEHOLDER)
 * Dipakai oleh section 04-review ("Kata Pelanggan") HANYA sebagai placeholder
 * yang tampil ketika REVIEWS_ENDPOINT (config.js) masih kosong atau proxy gagal.
 *
 * ⚠️  INI BUKAN ULASAN ASLI. Semua entri di bawah ditandai dataPlaceholder:true,
 *     memakai nama "Contoh Pelanggan", dan dirender dengan badge "CONTOH".
 *     JANGAN menampilkan ini seolah ulasan asli. Lihat PLACEHOLDERS.md.
 *
 * Begitu PEMILIK mengisi REVIEWS_ENDPOINT (config.js) dengan URL proxy Apps Script,
 * section menarik ulasan ASLI lewat proxy (cache mingguan di server) dan file sampel
 * ini diabaikan. Proxy di-key per SLUG cabang — placeId TIDAK lagi dibutuhkan klien.
 *
 * BENTUK RESPONS PROXY (asli):
 *   { updated:"ISO", branches:{ <slug>:{ rating, total, reviews:[ rv... ] } } }
 *   rv (proxy): { author, photo, url, rating, text, time }
 *   slug: yogyakarta | semarang | bandung | bali | surabaya
 * Renderer (04-review.html → mapReview) memetakan field ringkas proxy ke bentuk
 * internal di bawah, jadi satu jalur render untuk data asli & sampel:
 *   group:  { branch, slug, rating, userRatingsTotal, reviews:[ review... ] }
 *   review: { authorName, rating, text, relativeTime, profilePhotoUrl, authorUrl }
 *   (Semua ulasan dari Google → badge kartu selalu "Google"; tak perlu field "source".)
 *
 * CATATAN BATAS API (penting untuk ekspektasi tim):
 *   Google Places Details API mengembalikan MAKSIMAL 5 ulasan per lokasi dan
 *   TIDAK bisa difilter/diurutkan "terbaik" (Google yang memilih). Jadi tiap
 *   cabang aktif paling banyak menampilkan 5 ulasan.
 * ====================================================================== */
window.KS_REVIEWS_SAMPLE = [
  {
    branch: "Yogyakarta", slug: "yogyakarta",
    rating: null, userRatingsTotal: null, // agregat asli datang dari API saat tersambung
    reviews: [
      { authorName: "Contoh Pelanggan", rating: 5,
        text: "Seafoodnya segar, bisa pilih ikan hidup langsung. Tempat luas dan nyaman untuk keluarga, ada live music. (Teks contoh — bukan ulasan asli.)",
        relativeTime: "beberapa waktu lalu", profilePhotoUrl: "", authorUrl: "https://www.google.com/maps",
        dataPlaceholder: true},
      { authorName: "Contoh Pelanggan", rating: 4,
        text: "Pelayanan ramah dan porsinya besar. Cocok buat acara kantor di ruang VIP. (Teks contoh — bukan ulasan asli.)",
        relativeTime: "beberapa waktu lalu", profilePhotoUrl: "", authorUrl: "https://www.google.com/maps",
        dataPlaceholder: true}
    ]
  },
  {
    branch: "Semarang", slug: "semarang",
    rating: null, userRatingsTotal: null,
    reviews: [
      { authorName: "Contoh Pelanggan", rating: 5,
        text: "Ruang VIP-nya fleksibel untuk gathering, makanannya enak. Anak-anak betah ada playground. (Teks contoh — bukan ulasan asli.)",
        relativeTime: "beberapa waktu lalu", profilePhotoUrl: "", authorUrl: "https://www.google.com/maps",
        dataPlaceholder: true}
    ]
  },
  {
    branch: "Bandung", slug: "bandung",
    rating: null, userRatingsTotal: null,
    reviews: [
      { authorName: "Contoh Pelanggan", rating: 5,
        text: "Kepiting saus padangnya juara, kids-friendly, dekat pusat kota. Pasti balik lagi. (Teks contoh — bukan ulasan asli.)",
        relativeTime: "beberapa waktu lalu", profilePhotoUrl: "", authorUrl: "https://www.google.com/maps",
        dataPlaceholder: true}
    ]
  },
  {
    branch: "Bali (Tabanan)", slug: "bali",
    rating: null, userRatingsTotal: null,
    reviews: [
      { authorName: "Contoh Pelanggan", rating: 5,
        text: "Mampir saat ke Tanah Lot, parkir luas dan tempat bersih. Ikan bakarnya mantap. (Teks contoh — bukan ulasan asli.)",
        relativeTime: "beberapa waktu lalu", profilePhotoUrl: "", authorUrl: "https://www.google.com/maps",
        dataPlaceholder: true}
    ]
  },
  {
    branch: "Surabaya", slug: "surabaya",
    rating: null, userRatingsTotal: null,
    reviews: [
      { authorName: "Contoh Pelanggan", rating: 4,
        text: "Cabang baru dengan karaoke dan beberapa VIP room. Seafood segar dari akuarium. (Teks contoh — bukan ulasan asli.)",
        relativeTime: "beberapa waktu lalu", profilePhotoUrl: "", authorUrl: "https://www.google.com/maps",
        dataPlaceholder: true}
    ]
  }
];

/* Pengingat internal (TIDAK tampil ke pengunjung): tegaskan ini placeholder. */
(function () {
  try {
    if (window.console) {
      console.warn(
        "[Kurnia Seafood] ULASAN = CONTOH/PLACEHOLDER. Isi REVIEWS_ENDPOINT (config.js) " +
        "+ placeId tiap cabang (branches.js) lalu deploy proxy Apps Script untuk ulasan Google asli."
      );
    }
  } catch (e) {}
})();
