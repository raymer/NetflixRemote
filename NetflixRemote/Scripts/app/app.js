
$(document).ready(function () {
   
    var netflixRemote = $.connection.netflixRemoteHub;

    $.connection.hub.start().done(function () {

        $('#playPauseButton').click(function () {
            netflixRemote.server.pushMessage('PLAY_PAUSE');
        });

        $('#muteUnmuteButton').click(function () {
            netflixRemote.server.pushMessage('MUTE_UNMUTE');
        });

    });
});
