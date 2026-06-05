/* =========================================================================
 * Kurnia Seafood — SUMBER DATA TUNGGAL CABANG (single source of truth)
 * Dipakai oleh: Reservasi (routing WA), Halaman Cabang, dan CTA.
 *
 * CARA PASANG (Elementor): tempel isi file ini SEKALI sebelum section
 * Reservasi & Cabang — mis. di widget HTML paling atas halaman, atau enqueue
 * di functions.php child theme. Jangan menulis ulang nomor/alamat di tempat lain.
 *
 * Format WA: nomor tanpa '+'/spasi (format wa.me).
 * Field verify:true = data dari artikel pihak ketiga → WAJIB dikonfirmasi tim
 * sebelum produksi (lihat peringatan console di bawah).
 * ====================================================================== */
window.KS_BRANCHES = [
  {
    slug: "yogyakarta",
    city: "Yogyakarta",
    name: "Kurnia Seafood Yogyakarta",
    status: "active",
    whatsapp: "6285229235758",
    phoneDisplay: "+62 852-2923-5758",
    address: "Jl. Laksda Adisucipto No.48B, Ngentak, Caturtunggal, Kec. Depok, Kab. Sleman, DI Yogyakarta 55281",
    geo: { lat: -7.783678, lng: 110.407989 },
    hours: "Sen–Sab & Jum: 11.00–22.00 · Rab: 12.00–22.00 · Min: 10.00–22.00",
    tagline: "2 lantai dengan live music dua kali sehari & pasar seafood ikan hidup.",
    facilities: [
      "Kapasitas ±180 kursi, 2 lantai (indoor + outdoor)",
      "2 ruang VIP ber-AC (lantai bawah ±24 orang, lantai atas ±60 orang) — bisa jadi ruang meeting, ada proyektor & layar",
      "Live music 2x/hari (siang 14.00–16.00, malam mulai 19.00)",
      "Seafood market / ruang display ikan hidup",
      "Playground anak",
      "Musholla",
      "Area parkir (±30 mobil + 6 bus pariwisata)",
      "Smoking area",
      "Halal"
    ],
    verify: true // sumber: impessa.id, amazingjogja.com
  },
  {
    slug: "semarang",
    city: "Semarang",
    name: "Kurnia Seafood Semarang",
    status: "active",
    whatsapp: "6281339505758",
    phoneDisplay: "+62 813-3950-5758",
    address: "Jl. Kompol Maksum No.300, Peterongan, Kec. Semarang Selatan, Kota Semarang, Jawa Tengah 50242",
    geo: { lat: -6.9992529, lng: 110.4338483 },
    hours: "Sen–Sab: 11.00–22.00 · Min: 10.00–22.00",
    tagline: "3 ruang VIP fleksibel (connecting doors) lengkap untuk meeting & gathering.",
    facilities: [
      "Indoor ber-AC, outdoor, dan gazebo",
      "3 ruang VIP (Anyer, Benoa, Bunaken) @24 pax dengan connecting doors — gabung hingga 84 pax",
      "Perlengkapan meeting: LCD proyektor, Smart TV, wireless microphone",
      "Pilihan dining set: set menu, set on table, buffet, à la carte",
      "Playground anak",
      "Musala",
      "Parkiran luas",
      "Welcome drink",
      "Seafood market (pilih seafood hidup)",
      "Halal"
    ],
    verify: false // sebagian dari artikel resmi kurniaseafood.co.id + kumparan.com
  },
  {
    slug: "bandung",
    city: "Bandung",
    name: "Kurnia Seafood Bandung",
    status: "active",
    whatsapp: "6281372405758",
    phoneDisplay: "+62 813-7240-5758",
    address: "Jl. Prof. Dr. Sutami No.100, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152",
    geo: { lat: -6.8788783, lng: 107.5842693 },
    hours: "Sen–Sab & Jum: 11.00–22.00 · Rab: 12.00–22.00 · Min: 10.00–22.00",
    tagline: "Kids-friendly & dekat pusat kota, cocok mampir setelah berwisata.",
    facilities: [
      "Area bermain anak (kids-friendly)",
      "Ruang VIP",
      "Live music",
      "Live seafood (pilih langsung)",
      "Area outdoor",
      "Smoking area",
      "Wifi",
      "Area parkir luas",
      "Pembayaran: tunai, Visa, Mastercard, debit, QRIS",
      "Layanan pesan antar",
      "Halal (bersertifikat)",
      "Cocok untuk meeting & perayaan ulang tahun"
    ],
    verify: true // sumber: pergikuliner.com, kombi.id
  },
  {
    slug: "bali",
    city: "Bali (Tabanan)",
    name: "Kurnia Seafood Bali",
    status: "active",
    whatsapp: "6281338555758",
    phoneDisplay: "+62 813-3855-5758",
    address: "Jl. By Pass Tanah Lot, Beraban, Kec. Kediri, Kab. Tabanan, Bali 82121",
    geo: { lat: -8.6068436, lng: 115.1092288 },
    hours: "Setiap hari: 11.00–21.00 WITA",
    tagline: "Parkir raksasa & meeting room hingga 200 orang, di jalur menuju Tanah Lot.",
    facilities: [
      "Area parkir sangat luas (±30 bus, 150 mobil, ratusan motor)",
      "Meeting room kapasitas hingga 200 orang (bisa untuk acara pernikahan)",
      "Live music",
      "Banyak toilet + fasilitas mandi (tersedia toko perlengkapan mandi)",
      "Seafood market",
      "Courtyard dengan air mancur",
      "Menu tambahan masakan India / opsi vegetarian",
      "Halal"
    ],
    verify: true // sumber: kumparan.com
  },
  {
    slug: "surabaya",
    city: "Surabaya",
    name: "Kurnia Seafood Surabaya",
    status: "active",
    whatsapp: "6281385375758",
    phoneDisplay: "+62 813-8537-5758",
    address: "Jl. Kombes Pol. Moh. Duryat No.4, Embong Kaliasin, Kec. Tegalsari, Surabaya, Jawa Timur 60271",
    geo: { lat: -7.2684478, lng: 112.7400955 },
    hours: "Sen–Sel: 10.00–22.00 · Rab–Min: 11.00–22.00",
    tagline: "Cabang terbaru dengan karaoke & tiga VIP room untuk segala ukuran acara.",
    facilities: [
      "Total kapasitas 180 pax",
      "Main Hall (hingga 115 pax)",
      "VIP Room Anyer (30+ pax)",
      "VIP Room Carita (25+ pax)",
      "VIP Room Bunaken (10 pax)",
      "Fasilitas karaoke",
      "Ruang meeting",
      "Live seafood (aquarium)",
      "Halal"
    ],
    verify: false // sumber: artikel resmi kurniaseafood.co.id
  },

  // --- UPCOMING (Segera Hadir) — JANGAN dibuatkan schema/halaman cabang penuh sampai benar-benar buka ---
  // Catatan internal (JANGAN tampil di UI): lokasi bekas resto, referensi tim saja.
  {
    slug: "jakarta-pondok-indah",
    city: "Jakarta",
    area: "Pondok Indah",
    name: "Kurnia Seafood Jakarta",
    status: "upcoming",
    openingEstimate: "Akhir 2026" // perkiraan — TODO: konfirmasi final/estimasi dgn tim
    // internal: menempati bekas lokasi resto (TODO: konfirmasi ejaan nama). Jangan ditampilkan di UI.
  },
  {
    slug: "bandung-2",
    city: "Bandung",
    area: "", // TODO: isi area/kawasan spesifik cabang ke-2 bila sudah pasti
    name: "Kurnia Seafood Bandung (Cabang ke-2)",
    status: "upcoming",
    openingEstimate: "September 2026" // perkiraan — TODO: konfirmasi final/estimasi dgn tim
    // internal: menempati bekas lokasi resto Hello Summer. Jangan ditampilkan di UI.
  }
];

/* Pengingat internal (TIDAK tampil ke pengunjung): daftar cabang ber-verify:true
   = data pihak ketiga yang perlu dikonfirmasi tim sebelum produksi. */
(function () {
  try {
    var toVerify = (window.KS_BRANCHES || []).filter(function (b) { return b.verify; });
    if (toVerify.length && window.console) {
      console.warn(
        "[Kurnia Seafood] DATA CABANG PERLU DIVERIFIKASI TIM (sumber pihak ketiga): " +
        toVerify.map(function (b) { return b.city; }).join(", ")
      );
    }
  } catch (e) {}
})();
