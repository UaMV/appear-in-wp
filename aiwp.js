/**
 * Theme cards for displaying excerpt and post content.
 */
jQuery(document).ready(function( $ ) {

	// initiate AppearIn SDK
	var aiwp = new AppearIn();

	// check if webRTC compatible
	var aiwpCompatible = aiwp.isWebRtcCompatible();

	// get roomname from URI if provided
	var aiRoom = lookToURI( 'room' );

	if ( aiwpCompatible ) {
		$('#webrtc-compatability-tester').hide();
	} else {
	    $('#appearin-incompatibility').show();
        $('#aiwp-room-type-selection').hide();
	}
   
    if ( '' != aiRoom ) {
    	$( window ).on( 'load', function() {
			window.location.hash = 'appearin-room';
		});

    	// hide room type selection
    	$('#aiwp-room-type-selection').hide();

    	// launch room
    	launchAppearInRoom( aiRoom, 'invite' );
    } // end if

	// Handle Room Selection
	$('#aiwp-select-public-room,#aiwp-select-private-room,#aiwp-select-post-room').click( function () {
			
		var roomType = $(this).data('room-type');
		var roomInvites = $(this).data('room-invites');

		if ( 'post' == roomType ) {
			var roomURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
			launchAppearInRoom( roomURL );
		} else if ( 'public' == roomType ) {
			var roomName = $('#appearin-room').attr('data-room-name');
			launchAppearInRoom( roomName );
		} else if ( 'private' == roomType ) {
			aiwp.getRandomRoomName().then(function(roomName) {
				launchAppearInRoom( roomName.replace('/','') );
			});
		}

	});

	function launchAppearInRoom( randomString, origin ) {
		if ( randomString.indexOf('appear.in') >= 0 ) {
			var roomName = randomString.replace('?lite','');
		} else {
			var roomName = 'appear.in/' + randomString;
		}
		var roomNameLite = roomName + '?lite';
		if ( '/' != window.location.pathname ) {
			var roomURL = window.location.host + window.location.pathname;
		} else if ( '' != window.location.search ) {
			var roomURL = window.location.host + window.location.search;
			var n = roomURL.indexOf('?room=');
			roomURL = roomURL.substring(0, n != -1 ? n : roomURL.length);
		} else {
			var roomURL = window.location.host
		}
		// set the iframe source to load the room
		var iframe = document.getElementById('appearin-room');
		iframe.setAttribute('src', window.location.protocol + "//" + roomNameLite);

		var container = $('#aiwp-container');
		container.addClass('aiwp-room-threshold');
		if ( 'bottom' == container.data('position') ) {
			$('body').append(container);
		}
		$('body').append($('#aiwp-maximize'));

		$('#aiwp-room-type-selection').hide();
		$('#appearin-room').css('height',container.data('room-height'));
		$('#aiwp-invites').show();
		$('#aiwp-invite-facebook').attr('href','https://facebook.com/sharer.php?u='+roomURL+'?room='+roomNameLite);
		$('#aiwp-invite-twitter').attr('href','https://twitter.com/intent/tweet?url='+window.location.protocol+'//'+roomURL+'?room='+roomNameLite+'&text=Join%20me%20in%20an%20%23appear_inWP%20video%20chat%20at');
		$('#aiwp-invite-email').attr('href','mailto:?subject=You\'ve%20been%20invited%20to%20appear.in%20a%20video%20chat&body='+roomURL+'?room='+roomNameLite);
		
		if ( 'bottom' != container.data('position') ) {
			$('#appearin-room-label').html(roomURL+'?room='+roomNameLite);
			$('#appearin-room-label-external').html('<a href="https://'+roomName+'" target="_self">Visit Full Room</a>');
		}

		container.css('height',container.data('room-height'));

		if ( 'bottom' == container.data('position') ) {
			$('body').css('margin-bottom',container.data('room-height'));
		}

		window.onbeforeunload = function(){
		    return 'Active sessions at ' + roomName + ' will be ended.'; 
		}

	}

	function lookToURI(name){
		if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) {
			return decodeURIComponent(name[1]);
		} else {
			return '';
		}
	}

	$('#aiwp-minimize').click( function() {
		$('#aiwp-container').slideUp();
		$('body').css('margin-bottom',0);
		$('#aiwp-maximize').delay(400).show(200);
	});

	$('#aiwp-maximize').click( function() {
		$('#aiwp-container').slideDown();
		$('body').css('margin-bottom',$('#aiwp-container').data('room-height'));
		$('#aiwp-maximize').hide();
	})

});
