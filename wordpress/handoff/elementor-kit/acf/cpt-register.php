<?php
/**
 * Kurnia Seafood — Registrasi Custom Post Type: "Cabang" & "Menu"
 * =========================================================================
 * Pasang di child theme functions.php:
 *     require_once get_stylesheet_directory() . '/inc/cpt-register.php';
 * atau bungkus sebagai plugin mandiri (taruh di wp-content/plugins/).
 *
 * Setelah aktif: import field ACF dari acf-fields-cabang.json &
 * acf-fields-menu.json (ACF → Tools → Import), lalu isi konten via admin.
 *
 * CATATAN data:
 *   • Menu: TANPA field harga (locked).
 *   • Cabang: slug = kunci proxy ulasan (yogyakarta|semarang|bandung|bali|surabaya).
 *   • Cabang upcoming: cukup status=upcoming; jangan dibuatkan schema sampai buka.
 * =========================================================================
 *
 * @package KurniaSeafood
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Akses langsung dilarang.
}

add_action( 'init', 'ks_register_cpt_cabang' );
add_action( 'init', 'ks_register_cpt_menu' );

/**
 * CPT: Cabang (lokasi restoran).
 */
function ks_register_cpt_cabang() {
	$labels = array(
		'name'               => 'Cabang',
		'singular_name'      => 'Cabang',
		'menu_name'          => 'Cabang',
		'add_new'            => 'Tambah Cabang',
		'add_new_item'       => 'Tambah Cabang Baru',
		'edit_item'          => 'Edit Cabang',
		'new_item'           => 'Cabang Baru',
		'view_item'          => 'Lihat Cabang',
		'search_items'       => 'Cari Cabang',
		'not_found'          => 'Cabang tidak ditemukan',
		'not_found_in_trash' => 'Tidak ada Cabang di sampah',
		'all_items'          => 'Semua Cabang',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'has_archive'        => true,
		'show_in_rest'       => true, // dukung Gutenberg/REST & Elementor dynamic
		'menu_icon'          => 'dashicons-store',
		'menu_position'      => 26,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'page-attributes' ),
		'rewrite'            => array( 'slug' => 'cabang', 'with_front' => false ),
		'capability_type'    => 'post',
	);

	register_post_type( 'cabang', $args );
}

/**
 * CPT: Menu (hidangan — New Menu & Signature). TANPA HARGA.
 */
function ks_register_cpt_menu() {
	$labels = array(
		'name'               => 'Menu',
		'singular_name'      => 'Menu',
		'menu_name'          => 'Menu',
		'add_new'            => 'Tambah Menu',
		'add_new_item'       => 'Tambah Menu Baru',
		'edit_item'          => 'Edit Menu',
		'new_item'           => 'Menu Baru',
		'view_item'          => 'Lihat Menu',
		'search_items'       => 'Cari Menu',
		'not_found'          => 'Menu tidak ditemukan',
		'not_found_in_trash' => 'Tidak ada Menu di sampah',
		'all_items'          => 'Semua Menu',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'has_archive'        => false,
		'show_in_rest'       => true,
		'menu_icon'          => 'dashicons-food',
		'menu_position'      => 27,
		'supports'           => array( 'title', 'editor', 'thumbnail' ),
		'rewrite'            => array( 'slug' => 'menu', 'with_front' => false ),
		'capability_type'    => 'post',
	);

	register_post_type( 'menu_kurnia', $args ); // 'menu' bentrok dgn nav menu → pakai 'menu_kurnia'

	// Taksonomi kategori menu (mis. Seafood, Bakar, Pencuci Mulut). TANPA harga.
	register_taxonomy(
		'menu_kategori',
		'menu_kurnia',
		array(
			'labels'       => array(
				'name'          => 'Kategori Menu',
				'singular_name' => 'Kategori Menu',
			),
			'public'       => true,
			'hierarchical' => true,
			'show_in_rest' => true,
			'rewrite'      => array( 'slug' => 'menu-kategori' ),
		)
	);
}
