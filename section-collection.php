<?php
/**
 * Plugin Name: Section Collection
 * Description: A versatile section collection plugin featuring essential UI blocks to craft impactful, engaging, and user-centric web pages.
 * Version: 1.0.2
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BPSC_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BPSC_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BPSC_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'BPSCPlugin' ) ){
	class BPSCPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_action( 'enqueue_block_editor_assets', [ $this, 'enqueueAssets' ] );
			add_filter( 'block_categories_all', [$this, 'registerCategories'] );
		}

		function onInit(){
			$blocks =['testimonial_block', 'timeline_block', 'ticker', 'about-us', 'team_section', 'faq', 'call-to-actions', 'info-list-block', 'hero-section'];
			foreach ( $blocks as $block ) {
				register_block_type( __DIR__ . "/build/".$block );
			}
		}
		function enqueueAssets(){
			wp_enqueue_style( 'bndl-style', BPSC_DIR_URL . 'build/index.css', [], BPSC_VERSION );
			wp_enqueue_script( 'bndl-script', BPSC_DIR_URL . 'build/index.js', ['wp-blocks'], BPSC_VERSION, true );
		}

		function registerCategories( $categories ){
			return array_merge( [ [
				'slug'	=> 'bPlugins',
				'title'	=> __( 'Section Collection', 'b-plugins' ),
			] ], $categories );
		} 
	}
	new BPSCPlugin();
}