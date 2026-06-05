<?php
/**
 * Tambahkan baris ini ke functions.php CHILD THEME (jangan parent theme).
 * Pastikan file schema-jsonld.php sudah ada di: <child-theme>/inc/schema-jsonld.php
 */

require_once get_stylesheet_directory() . '/inc/schema-jsonld.php';

/* ---------------------------------------------------------------------------
 * CONTOH override opsional (uncomment & sesuaikan bila perlu):
 *
 * // URL menu & reservasi final:
 * add_filter( 'ks_schema_menu_url',         fn() => home_url( '/menu/' ) );
 * add_filter( 'ks_schema_reservations_url', fn() => home_url( '/reservasi/' ) );
 *
 * // URL logo (untuk Organization di homepage):
 * add_filter( 'ks_schema_logo_url', fn() => 'https://kurniaseafood.co.id/wp-content/uploads/logo.png' );
 *
 * // Slug halaman FAQ bila bukan "faq":
 * add_filter( 'ks_schema_faq_slug', fn() => 'tanya-jawab' );
 *
 * // Paksa output Organization/Breadcrumb walau ada plugin SEO (matikan anti-duplikat):
 * // add_filter( 'ks_schema_output_type', '__return_true' );
 *
 * // Isi Q&A FAQ secara MANUAL (HANYA kalau parser otomatis gagal & ini Q&A ASLI di halaman):
 * // add_filter( 'ks_schema_faq_items', function () {
 * //     return array(
 * //         'Apakah perlu reservasi?' => 'Jawaban persis seperti di halaman FAQ...',
 * //     );
 * // } );
 * ------------------------------------------------------------------------- */
