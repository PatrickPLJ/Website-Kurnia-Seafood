<?php
/**
 * Kurnia Seafood — JSON-LD Structured Data
 * =========================================================================
 * Output schema Restaurant + BreadcrumbList (per cabang), Organization
 * (homepage), dan FAQPage (halaman FAQ) ke <head> via hook wp_head.
 *
 * CARA PASANG (di situs WordPress asli, BUKAN otomatis):
 *   1. Salin file ini ke child theme:  wp-content/themes/<child>/inc/schema-jsonld.php
 *   2. Tambahkan di functions.php child theme:
 *        require_once get_stylesheet_directory() . '/inc/schema-jsonld.php';
 *   3. Sesuaikan bagian bertanda "TODO" (slug halaman, URL menu/reservasi,
 *      foto, logo, nomor telepon Bandung).
 *
 * Sumber data: kurnia-seafood-schema.md
 * Catatan: TIDAK ada aggregateRating (sengaja — lihat README).
 * =========================================================================
 *
 * @package KurniaSeafood
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Akses langsung dilarang.
}

/* -------------------------------------------------------------------------
 * 1) DATA CABANG
 *    Kunci array = SLUG halaman cabang di WordPress.
 *    TODO: verifikasi slug aktual (Langkah 0). Default = dugaan /lokasi-*.
 *    Bisa juga set 'page_id' (integer) bila lebih pasti daripada slug.
 * ---------------------------------------------------------------------- */
function ks_schema_branches() {
	$branches = array(
		// slug => data
		'lokasi-yogya' => array(
			'page_id'   => 0, // TODO: isi ID halaman bila slug berbeda
			'city'      => 'Yogyakarta',
			'name'      => 'Kurnia Seafood Yogyakarta',
			'telephone' => '+62274488000', // TODO: pakai nomor WA bila ingin (samakan dgn GBP)
			'image'     => '', // TODO: URL foto cabang (>=1200px). Kosong = pakai featured image.
			'street'    => 'Jl. Laksda Adisucipto No.48B, Ngentak, Caturtunggal, Kec. Depok',
			'locality'  => 'Kabupaten Sleman',
			'region'    => 'Daerah Istimewa Yogyakarta',
			'postal'    => '55281',
			'lat'       => -7.783678,
			'lng'       => 110.407989,
			'hours'     => array(
				array( array( 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday' ), '11:00', '22:00' ),
				array( array( 'Wednesday' ), '12:00', '22:00' ),
				array( array( 'Sunday' ), '10:00', '22:00' ),
			),
		),
		'lokasi-semarang' => array(
			'page_id'   => 0,
			'city'      => 'Semarang',
			'name'      => 'Kurnia Seafood Semarang',
			'telephone' => '+6281339505758',
			'image'     => '',
			'street'    => 'Jl. Kompol Maksum No.300, Peterongan, Kec. Semarang Selatan',
			'locality'  => 'Kota Semarang',
			'region'    => 'Jawa Tengah',
			'postal'    => '50242',
			'lat'       => -6.9992529,
			'lng'       => 110.4338483,
			'hours'     => array(
				array( array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ), '11:00', '22:00' ),
				array( array( 'Sunday' ), '10:00', '22:00' ),
			),
		),
		'lokasi-bandung' => array(
			'page_id'   => 0,
			'city'      => 'Bandung',
			'name'      => 'Kurnia Seafood Bandung',
			// TODO: NAP Bandung perlu disamakan. GBP: +62 821-2188-2122,
			// halaman Kontak situs: +62 813-7240-5758. Pilih satu & samakan di GBP.
			'telephone' => '+6282121882122',
			'image'     => '',
			'street'    => 'Jl. Prof. Dr. Sutami No.100, Sukarasa, Kec. Sukasari',
			'locality'  => 'Kota Bandung',
			'region'    => 'Jawa Barat',
			'postal'    => '40152',
			'lat'       => -6.8788783,
			'lng'       => 107.5842693,
			'hours'     => array(
				array( array( 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday' ), '11:00', '22:00' ),
				array( array( 'Wednesday' ), '12:00', '22:00' ),
				array( array( 'Sunday' ), '10:00', '22:00' ),
			),
		),
		'kurnia-seafood-bali' => array(
			'page_id'   => 0,
			'city'      => 'Bali',
			'name'      => 'Kurnia Seafood Bali',
			'telephone' => '+6281338555758',
			'image'     => '',
			'street'    => 'Jl. By Pass Tanah Lot, Beraban, Kec. Kediri',
			'locality'  => 'Kabupaten Tabanan',
			'region'    => 'Bali',
			'postal'    => '82121',
			'lat'       => -8.6068436,
			'lng'       => 115.1092288,
			'hours'     => array(
				array( array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ), '11:00', '21:00' ),
			),
		),
		'lokasi-surabaya' => array(
			'page_id'   => 0,
			'city'      => 'Surabaya',
			'name'      => 'Kurnia Seafood Surabaya',
			'telephone' => '+6281385375758',
			'image'     => '',
			'street'    => 'Jl. Kombes Pol. Moh. Duryat No.4, Embong Kaliasin, Kec. Tegalsari',
			'locality'  => 'Kota Surabaya',
			'region'    => 'Jawa Timur',
			'postal'    => '60271',
			'lat'       => -7.2684478,
			'lng'       => 112.7400955,
			'hours'     => array(
				array( array( 'Monday', 'Tuesday' ), '10:00', '22:00' ),
				array( array( 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ), '11:00', '22:00' ),
			),
		),
	);

	/** Filter agar slug/data bisa diubah tanpa edit file ini. */
	return apply_filters( 'ks_schema_branches', $branches );
}

/* -------------------------------------------------------------------------
 * 2) ANTI-DUPLIKAT dengan plugin SEO
 *    Default: jika Yoast / Rank Math aktif, JANGAN keluarkan Organization &
 *    BreadcrumbList (plugin sudah meng-output-nya). Restaurant & FAQ tetap.
 *    Override via filter 'ks_schema_output_type'.
 * ---------------------------------------------------------------------- */
function ks_schema_should_output( $type ) {
	$seo_active = defined( 'WPSEO_VERSION' )      // Yoast
		|| class_exists( 'WPSEO_Options' )
		|| class_exists( 'RankMath' )             // Rank Math
		|| defined( 'RANK_MATH_VERSION' );

	$default = true;
	if ( $seo_active && in_array( $type, array( 'Organization', 'BreadcrumbList' ), true ) ) {
		$default = false;
	}

	return (bool) apply_filters( 'ks_schema_output_type', $default, $type, $seo_active );
}

/* -------------------------------------------------------------------------
 * 3) BUILDER
 * ---------------------------------------------------------------------- */
function ks_schema_hours( $rows ) {
	$out = array();
	foreach ( $rows as $r ) {
		$days = $r[0];
		$out[] = array(
			'@type'     => 'OpeningHoursSpecification',
			'dayOfWeek' => ( count( $days ) === 1 ? $days[0] : $days ),
			'opens'     => $r[1],
			'closes'    => $r[2],
		);
	}
	return $out;
}

function ks_schema_restaurant( $b ) {
	$url = get_permalink( get_queried_object_id() );
	if ( ! $url ) {
		$url = home_url( '/' );
	}

	$data = array(
		'@context'            => 'https://schema.org',
		'@type'               => 'Restaurant',
		'@id'                 => $url . '#restaurant',
		'name'                => $b['name'],
		'url'                 => $url,
		'telephone'           => $b['telephone'],
		'priceRange'          => '$$',
		'servesCuisine'       => array( 'Seafood', 'Indonesian' ),
		// TODO: samakan dgn URL final menu & reservasi.
		'acceptsReservations' => apply_filters( 'ks_schema_reservations_url', home_url( '/reservasi/' ) ),
		'hasMenu'             => apply_filters( 'ks_schema_menu_url', home_url( '/menu/' ) ),
		'address'             => array(
			'@type'           => 'PostalAddress',
			'streetAddress'   => $b['street'],
			'addressLocality' => $b['locality'],
			'addressRegion'   => $b['region'],
			'postalCode'      => $b['postal'],
			'addressCountry'  => 'ID',
		),
		'geo'                 => array(
			'@type'     => 'GeoCoordinates',
			'latitude'  => $b['lat'],
			'longitude' => $b['lng'],
		),
		'openingHoursSpecification' => ks_schema_hours( $b['hours'] ),
		'brand'               => array( '@type' => 'Brand', 'name' => 'Kurnia Seafood' ),
		'parentOrganization'  => array( '@type' => 'Organization', 'name' => 'Kurnia Jatim Group' ),
		'sameAs'              => array( 'https://www.instagram.com/kurnia.seafood/' ),
	);

	// Gambar: pakai 'image' eksplisit, jika kosong coba featured image halaman.
	$img = $b['image'];
	if ( empty( $img ) ) {
		$thumb = get_the_post_thumbnail_url( get_queried_object_id(), 'full' );
		if ( $thumb ) {
			$img = $thumb;
		}
	}
	if ( ! empty( $img ) ) {
		$data['image'] = $img;
	}

	return $data;
}

function ks_schema_breadcrumb( $city ) {
	$current = get_permalink( get_queried_object_id() );
	if ( ! $current ) {
		$current = home_url( '/' );
	}
	return array(
		'@context'        => 'https://schema.org',
		'@type'           => 'BreadcrumbList',
		'itemListElement' => array(
			array( '@type' => 'ListItem', 'position' => 1, 'name' => 'Beranda', 'item' => home_url( '/' ) ),
			// TODO: konfirmasi URL halaman daftar cabang ('/cabang/').
			array( '@type' => 'ListItem', 'position' => 2, 'name' => 'Cabang', 'item' => apply_filters( 'ks_schema_cabang_url', home_url( '/cabang/' ) ) ),
			array( '@type' => 'ListItem', 'position' => 3, 'name' => $city, 'item' => $current ),
		),
	);
}

function ks_schema_organization() {
	// TODO: ganti dgn URL logo asli di Media Library.
	$logo = apply_filters( 'ks_schema_logo_url', home_url( '/wp-content/uploads/logo-kurnia-seafood.png' ) );
	return array(
		'@context'           => 'https://schema.org',
		'@type'              => 'Organization',
		'@id'                => home_url( '/' ) . '#organization',
		'name'               => 'Kurnia Seafood',
		'url'                => home_url( '/' ),
		'logo'               => $logo,
		'parentOrganization' => array( '@type' => 'Organization', 'name' => 'Kurnia Jatim Group' ),
		'sameAs'             => array( 'https://www.instagram.com/kurnia.seafood/' ),
	);
}

/* -------------------------------------------------------------------------
 * 4) FAQPage — DARI KONTEN ASLI (tidak mengarang)
 *    Urutan: (a) filter manual 'ks_schema_faq_items', lalu
 *            (b) parsing otomatis dari konten halaman FAQ.
 *    Jika tidak ada Q&A yang ditemukan -> tidak meng-output apa pun.
 * ---------------------------------------------------------------------- */
function ks_schema_faqpage() {
	// (a) Override manual: array( 'Pertanyaan' => 'Jawaban', ... ).
	$items = apply_filters( 'ks_schema_faq_items', array() );

	// (b) Parsing otomatis dari konten halaman.
	if ( empty( $items ) ) {
		$post = get_queried_object();
		if ( $post instanceof WP_Post ) {
			$html  = apply_filters( 'the_content', $post->post_content );
			$items = ks_schema_parse_faq( $html );
		}
	}

	if ( empty( $items ) ) {
		return null; // Tidak ada Q&A asli -> jangan output (hindari mengarang).
	}

	$entities = array();
	foreach ( $items as $q => $a ) {
		$q = trim( wp_strip_all_tags( (string) $q ) );
		$a = trim( wp_strip_all_tags( (string) $a ) );
		if ( '' === $q || '' === $a ) {
			continue;
		}
		$entities[] = array(
			'@type'          => 'Question',
			'name'           => $q,
			'acceptedAnswer' => array( '@type' => 'Answer', 'text' => $a ),
		);
	}

	if ( empty( $entities ) ) {
		return null;
	}

	return array(
		'@context'   => 'https://schema.org',
		'@type'      => 'FAQPage',
		'mainEntity' => $entities,
	);
}

/**
 * Best-effort parser Q&A dari HTML konten halaman FAQ.
 * Mendukung: (A) <details><summary>Q</summary>A</details>,
 *            (B) heading h2/h3/h4 sebagai Q dan konten setelahnya sebagai A.
 * Jika markup FAQ kamu berbeda, pakai filter 'ks_schema_faq_items' untuk
 * mengisi Q&A secara manual.
 */
function ks_schema_parse_faq( $html ) {
	$items = array();
	if ( ! class_exists( 'DOMDocument' ) || '' === trim( (string) $html ) ) {
		return $items;
	}

	libxml_use_internal_errors( true );
	$doc = new DOMDocument();
	$doc->loadHTML( '<?xml encoding="utf-8" ?>' . $html );
	libxml_clear_errors();

	// Pola A: <details>/<summary>.
	$details = $doc->getElementsByTagName( 'details' );
	if ( $details->length > 0 ) {
		foreach ( $details as $d ) {
			$sum = $d->getElementsByTagName( 'summary' )->item( 0 );
			if ( ! $sum ) {
				continue;
			}
			$q = trim( $sum->textContent );
			$a = trim( str_replace( $sum->textContent, '', $d->textContent ) );
			if ( '' !== $q && '' !== $a ) {
				$items[ $q ] = $a;
			}
		}
		if ( ! empty( $items ) ) {
			return $items;
		}
	}

	// Pola B: heading + konten berikutnya.
	$xpath = new DOMXPath( $doc );
	$nodes = $xpath->query( '//h2|//h3|//h4' );
	if ( $nodes ) {
		foreach ( $nodes as $h ) {
			$q = trim( $h->textContent );
			if ( '' === $q ) {
				continue;
			}
			$a = '';
			for ( $n = $h->nextSibling; $n; $n = $n->nextSibling ) {
				if ( XML_ELEMENT_NODE === $n->nodeType && preg_match( '/^h[2-4]$/i', $n->nodeName ) ) {
					break; // berhenti di heading berikutnya
				}
				$a .= ' ' . trim( $n->textContent );
			}
			$a = trim( preg_replace( '/\s+/', ' ', $a ) );
			if ( '' !== $q && '' !== $a ) {
				$items[ $q ] = $a;
			}
		}
	}

	return $items;
}

/* -------------------------------------------------------------------------
 * 5) OUTPUT ke wp_head
 * ---------------------------------------------------------------------- */
function ks_schema_output() {
	if ( is_admin() || is_feed() ) {
		return;
	}

	$blocks = array();

	// Homepage -> Organization.
	if ( is_front_page() && ks_schema_should_output( 'Organization' ) ) {
		$blocks[] = ks_schema_organization();
	}

	// Halaman cabang -> Restaurant (+ Breadcrumb).
	foreach ( ks_schema_branches() as $slug => $b ) {
		$is_match = is_page( $slug ) || ( ! empty( $b['page_id'] ) && is_page( (int) $b['page_id'] ) );
		if ( $is_match ) {
			$blocks[] = ks_schema_restaurant( $b );
			if ( ks_schema_should_output( 'BreadcrumbList' ) ) {
				$blocks[] = ks_schema_breadcrumb( $b['city'] );
			}
			break;
		}
	}

	// Halaman FAQ -> FAQPage (dari konten asli).
	$faq_slug = apply_filters( 'ks_schema_faq_slug', 'faq' );
	if ( is_page( $faq_slug ) ) {
		$faq = ks_schema_faqpage();
		if ( $faq ) {
			$blocks[] = $faq;
		}
	}

	foreach ( $blocks as $block ) {
		echo "\n" . '<script type="application/ld+json">'
			. wp_json_encode( $block, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE )
			. '</script>' . "\n";
	}
}
add_action( 'wp_head', 'ks_schema_output', 20 );
