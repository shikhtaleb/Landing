var myVideo = document.getElementById('video1');

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
    }
    else {
        myVideo.pause();
    }
}

$(function () {
    $('#commentForm').validate();
});

/*
┌──────────────────────────────────────────┐
│         Coding by M. Shikh Taleb         │
│            www.shikhtaleb.com            │
└──────────────────────────────────────────┘
*/