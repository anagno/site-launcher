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

document.observe( "dom:loaded", function() 
{
	Event.observe( 'mode0', 'click', deactivated );
	Event.observe( 'mode1', 'click', showComingSoon );
	Event.observe( 'mode2', 'click', showSiteSuspended );
	Event.observe( 'showlaunchdate', 'click', showLaunchDateInput );
	Event.observe( 'hidelaunchdate', 'click', hideLaunchDateInput );
	Event.observe( 'showsuspenddate', 'click', showLaunchDateInputSuspended );
	Event.observe( 'hidesuspenddate', 'click', hideLaunchDateInputSuspended );
	Event.observe( 'showlogin', 'click', showLoginMessageInput );
	Event.observe( 'hidelogin', 'click', hideLoginMessageInput );
	Event.observe( 'showloginsuspended', 'click', showLoginMessageInputSuspended );
	Event.observe( 'hideloginsuspended', 'click', hideLoginMessageInputSuspended );
});

function alertMe()
{
	alert( 'Hi' );
}

function deactivated()
{
	document.getElementById( 'coming-soon-mode' ).style.display = 'none';
	document.getElementById( 'site-suspended-mode' ).style.display = 'none';
}

function showComingSoon()
{
	document.getElementById( 'coming-soon-mode' ).style.display = 'block';
	document.getElementById( 'site-suspended-mode' ).style.display = 'none';
}

function showSiteSuspended()
{
	document.getElementById( 'coming-soon-mode' ).style.display = 'none';
	document.getElementById( 'site-suspended-mode' ).style.display = 'block';
}

function showLoginMessageInput()
{
	document.getElementById( 'loginmessageinput' ).style.display = 'table-row';
}

function hideLoginMessageInput()
{
	document.getElementById( 'loginmessageinput' ).style.display = 'none';
}

function showLoginMessageInputSuspended()
{
	document.getElementById( 'loginmessageinputsuspended' ).style.display = 'table-row';
}

function hideLoginMessageInputSuspended()
{
	document.getElementById( 'loginmessageinputsuspended' ).style.display = 'none';
}

function showLaunchDateInput()
{
	document.getElementById( 'timestampdiv' ).style.display = 'block';
}

function hideLaunchDateInput()
{
	document.getElementById( 'timestampdiv' ).style.display = 'none';
}

function showLaunchDateInputSuspended()
{
	document.getElementById( 'timestampdivsuspended' ).style.display = 'block';
}

function hideLaunchDateInputSuspended()
{
	document.getElementById( 'timestampdivsuspended' ).style.display = 'none';
}


jQuery(function($)
{
	$( '#add_current_address_btn' ).click(function(e)
{
		e.preventDefault();
		e.stopPropagation();
		
		$(this).hide();
		$( '#loading_current_address' ).show();
		
		$.get(ajaxurl,
{
			action : 'site_launcher_get_ip_address'
		}, function(response)
{

			$( '#loading_current_address' ).hide();
			$( '#add_current_address_btn' ).show();
			$( '#ip_address' ).val(response);
		});
	});
});


jQuery(function($)
{
	$( '#add_current_address_btn_suspended' ).click(function(e)
{
		e.preventDefault();
		e.stopPropagation();
		
		$(this).hide();
		$( '#loading_current_address_suspended' ).show();
		
		$.get(ajaxurl,
{
			action : 'site_launcher_get_ip_address'
		}, function(response)
{

			$( '#loading_current_address_suspended' ).hide();
			$( '#add_current_address_btn_suspended' ).show();
			$( '#ip_address_suspended' ).val(response);
		});
	});
});