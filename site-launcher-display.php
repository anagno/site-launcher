<?php 
/*
 This file is part of Site Launcher.
 Site Launcher is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 Site Launcher is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 along with Site Launcher.  If not, see <http://www.gnu.org/licenses/>.
 */


function display_site_down_page( $options, $status )
{

	if ( $status == 'coming_soon' ) {
		$message_text		=		$options['message_text'];
		$fine_print		=		$options['fine_print'];
		$message_box_width	=		$options['message_box_width'];
		$background_color	=		$options['background_color'];
		$text_color		=		$options['text_color'];
		$message_box_opacity	=		$options['message_box_opacity'];
		$font			=		$options['font'];
		$show_login		=		$options['show_login'];
		$login_message		=		$options['login_message'];
	} elseif  ( $status == 'site_suspended' ) {
		$message_text		=		$options['message_text_suspended'];
		$fine_print		=		$options['fine_print_suspended'];
		$message_box_width	=		$options['message_box_width'];
		$background_color	=		$options['background_color_suspended'];
		$text_color		=		$options['text_color_suspended'];
		$message_box_opacity	=		$options['message_box_opacity_suspended'];
		$font			=		$options['font_suspended'];
		$show_login		=		$options['show_login_suspended'];
		$login_message		=		$options['login_message_suspended'];	
	
	} else {
		return;
	}


?>
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link href='http://fonts.googleapis.com/css?family=Special+Elite|Playfair+Display|Griffy|Indie+Flower|Open+Sans|Poiret+One|Philosopher|Orbitron|Patua+One|Limelight|Ubuntu|Roboto|Raleway|Roboto+Slab' rel='stylesheet' type='text/css'>
        <title>
           <?php bloginfo( 'name' ); ?>
        </title>
	<style type="text/css">
	body {
	  background-color: <?php echo $background_color; ?>;
	  color: <?php echo $text_color; ?>;
	}

	body, h1, p {
	  font-family: <?php echo $font; ?>;
	  font-weight: normal;
	  margin: 0;
	  padding: 0;
	  text-align: center;
	}
	
	.container {
	  width:  <?php echo $message_box_width; ?>;
	  padding:80px 40px;
	  background-color: rgba(255,255,255, <?php echo $message_box_opacity; ?>);
	  margin: 80px auto;
	}

	h1 {
	  font-size: 48px;
	  font-weight: 300;
	  margin: 0 0 20px 0;
	}

	p {
	  font-size: 18px;
	  font-weight: 200;
	  margin-bottom: 20px;
	  margin: 0 0 10px;
	}

	p.fineprint {
	  font-size:16px;
	}
	</style>
    </head>
    <body>
      <div class="container">
	<h1><?php bloginfo( 'name' ); ?> <?php echo $message_text; ?></h1>
	<p class="fineprint"><?php echo $fine_print; ?></p>
	<?php if ( $show_login != 0 ) { ?>
	<br /><p><?php echo $login_message; ?></p>
	<div style="width:300px; margin:10px auto;"><?php wp_login_form( ); ?> </div>
	<?php } ?>
    </div>
    </body>
</html>
<?php 
}

