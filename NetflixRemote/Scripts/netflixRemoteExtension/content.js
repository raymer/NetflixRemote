jQuery(document).ready(function () {

    // This points to wherever this app is hosted.
    $.connection.hub.url = 'http://localhost:45311/signalr';

    var netflixRemote = $.connection.netflixRemoteHub;

    netflixRemote.client.broadcastMessage = function (message) {
        if (message === 'PLAY_PAUSE') {
            jQuery('.player-play-pause').click();
        }
        if (message === 'MUTE_UNMUTE') {
            jQuery('.icon-player-volume-full').click();
        }
    };

    $.connection.hub.start().done(function () {});

});