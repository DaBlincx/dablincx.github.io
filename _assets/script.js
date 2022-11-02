function playWinError() {
    var win_err_audio = new Audio('/_assets/audio/win_err.mp3');
    win_err_audio.play();
}

function playRR() {
    var rr = new Audio('/_assets/audio/rr.mp3');
    rr.play();
}

function revColMenu() {
    var x = document.getElementById("navbar-menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}