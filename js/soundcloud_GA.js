/**
 * Measuring Soundcloud in Google Analytics
 * @author Vitor Venturin <vitorventurin@gmail.com>
 * 23-09-2013
 */
function playEventHandler (song) {  
	return function (eventData) {
		song.getCurrentSound(function (sound) {
				setTimeout(function() {
					window.soundB = sound.title;
				},1);
		});
	}
}

function playProgressEventHandler (song) {  
	return function (eventData) {
		song.getCurrentSound(function (sound) {
			window.t = Math.floor(eventData.relativePosition * 100);
		});
	}
}

function pauseEventHandler (song) {
	return function (eventData) {
		song.getCurrentSound(function (sound) {
			ga('send', 'event', 'SC_pause', window.soundB, calcT(window.t));
		});
	}
}

function finishEventHandler (song) {  
	return function (eventData) {
		song.getCurrentSound(function (sound) {
			ga('send', 'event', 'SC_complete', sound.title, '100');
		});
	}
}

function seekEventHandler (song) {  
	return function (eventData) {
		song.getCurrentSound(function (sound) {
			if (eventData.relativePosition === 0) {
				ga('send', 'event', 'SC_complete', window.soundB, '100');
			}
		});
	}
}

$(document).ready(function() {	
	window.t = 0;
	window.soundB;
	var 	i, 
			song,
			iframes = document.getElementsByTagName('iframe');
	for (i = 0; i < iframes.length; i++) {
		if (iframes[i].src.indexOf('//w.soundcloud.com/player') > -1) {
			iframes[i].id = "sc_player_"+i;
			song = SC.Widget(iframes[i].id);
			song.bind(SC.Widget.Events.PLAY_PROGRESS, playProgressEventHandler(song));
			song.bind(SC.Widget.Events.PLAY, playEventHandler(song));
			song.bind(SC.Widget.Events.PAUSE, pauseEventHandler(song));
			//song.bind(SC.Widget.Events.FINISH, finishEventHandler(song));
			song.bind(SC.Widget.Events.SEEK, seekEventHandler(song));
		}
	}
});

$(window).on('beforeunload', function(){
	if (window.t !== 0) {
		ga('send', 'event', 'SC_exit', window.soundB, calcT(window.t));
	} 
});

function calcT(_t) {
	if (_t < 0 || _t > 100) return;
    var bucket = (_t > 10 ? 1 : 0) * (
        Math.floor((_t - 1) / 10) * 10 + 1
    );
    bucket = String(bucket) + '-' +
        String(Math.ceil(_t / 10) * 10);
	return bucket;
}
