let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
let rewindIcon = document.getElementById("rewindIcon");
let fastFowardIcon = document.getElementById("fastFowardIcon");

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

controlIcon.addEventListener("click", () =>{
playPause()
});

let rewind = (seconds) => {
    song.currentTime -= seconds;
};
rewindIcon.addEventListener("click", () => {
    rewind(5);
})

let fastFoward = (seconds) => {
    song.currentTime += seconds;
};
fastFowardIcon.addEventListener("click", () => {
    fastFoward(5);
})

const playPause = () => {
    if (controlIcon.classList.contains("bi-pause-fill")) {
        song.pause()
        controlIcon.classList.remove("bi-pause-fill");
        controlIcon.classList.add("bi-play-fill");
    } else {
        song.play();
        controlIcon.classList.add("bi-pause-fill");
        controlIcon.classList.remove("bi-play-fill")
    }
}

if (song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
} 

progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.add("bi-pause");
    controlIcon.classList.remove("bi-play")
}
