const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("slider-song");

const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs = [
    {
        image: "../music/cover-assets/MUSIC-TO-WIGGLE-TO.png",
        name: "wat we did",
        artist: "gigawttz",
        audio: "../music/audio-assets/wat-we-did.mp3"
    },
    {
        image: "../music/cover-assets/MUSIC-TO-WIGGLE-TO.png",
        name: "CLEARWATER",
        artist: "gigawttz",
        audio: "../music/audio-assets/CLEARWATER.mp3"
    },
    {
        image: "../music/cover-assets/MUSIC-TO-WIGGLE-TO.png",
        name: "find your love",
        artist: "gigawttz",
        audio: "../music/audio-assets/find_your_luv_V1.mp3"
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;

updateSong();

prevSongButton.addEventListener("click", function() {
    if (currentSongIndex == 0) {
        return;
    }
    currentSongIndex--;
    updateSong();
});

nextSongButton.addEventListener("click", function() {
    if (currentSongIndex == songs.length - 1) {
        return;
    }
    currentSongIndex++;
    updateSong();
});

playpauseButton.addEventListener("click", function() {
    if (!audio.paused) {
        playpauseButton.classList.replace("play", "pause");
        audio.pause();

    }
    else {
        playpauseButton.classList.replace("pause", "play");
        audio.play();
    }
});

function updateSong() {
    const song = songs[currentSongIndex];
    songImage.src = song.image;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

    audio.src = song.audio;
    audio.onloadedmetadata = function() {
        songSlider.value = 0;
        songSlider.max = audio.duration;
    };
}

songSlider.addEventListener("change", function() {
    audio.currentTime = songSlider.value;
})

function moveSlider() {
    songSlider.value = audio.currentTime;
};

setInterval(moveSlider, 1000);
