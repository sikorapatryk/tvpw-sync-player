
(function (){

    var player = document.getElementById('video-player');
    var playButton = document.getElementById('play-button');
    var muteButton = document.getElementById('mute-button');
    var syncPlayer = document.getElementById('sync-player');
    var fullscreenButton = document.getElementById('fullscreen-button');
    var inputForm = document.getElementById('input-form');
    var muteico = document.getElementById('mute-ico');
    var playico = document.getElementById('play-ico');
    var fullico = document.getElementById('full-ico');
    var messages = [];

    playButton.addEventListener('click', function(){
        if(player.paused){
            player.play();
            playico.src='assets/pause.svg';
        } else {
            player.pause();
            playico.src='assets/play.svg';
        }
    })

    muteButton.addEventListener('click', function(){
        player.muted = !player.muted;
        if(player.muted){
            muteico.src='assets/muted.svg';
        } else {
            muteico.src='assets/unmuted.svg';
        }
    })

    fullscreenButton.addEventListener('click', function(){

        syncPlayer.requestFullscreen = syncPlayer.requestFullscreen || syncPlayer.webkitRequestFullscreen || syncPlayer.mozRequestFullScreen;
        document.fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
        document.exitFullscreen = document.exitFullscreen || document.webkitCancelFullScreen || syncPlayer.mozRequestExitFullScreen;

        if(document.fullscreenElement){
            document.exitFullscreen();
            document.fullscreenElement = null;
            fullico.src='assets/notfull.svg';
        } else {
            syncPlayer.requestFullscreen();
            fullico.src='assets/full.svg';
        }
    })

    inputForm.addEventListener('submit',function(){
        event.preventDefault();
        var form = event.target;
        
        var myMessage = form.elements.wiadomosc.value;
        var messageObject = {
            text: myMessage,
            time: Date.now()
        }

        messages.push(messageObject);

        console.log(messages)
    })

})();
