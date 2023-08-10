<?php
/**
 * Plugin Name:       NpsLiveChat
 * Description:       Nps scale made by WordPress.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Abate Tsegaye
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       npslivescale
 */

add_action( 'admin_menu', 'nps_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function nps_init_menu() {
    add_menu_page( __( 'NPS Scale', 'npsscale'), __( 'NPS Scale', 'npsscale'), 'manage_options', 'npsscale', 'nps_admin_page', 'dashicons-admin-post', '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function nps_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

add_action( 'admin_enqueue_scripts', 'nps_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function nps_admin_enqueue_scripts() {
    wp_enqueue_style( 'nps-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'nps-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}