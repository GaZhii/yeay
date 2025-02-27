// Fungsi untuk menunjukkan ucapan tersembunyi
function showWishes() {
    const wishes = document.getElementById('wishes');
    wishes.classList.toggle('hidden');
}

// Fungsi untuk mengawal muzik
let isPlaying = false;

function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicButton');

    if (isPlaying) {
        music.pause();
        musicButton.textContent = 'Mainkan Muzik 🎵';
    } else {
        music.play();
        musicButton.textContent = 'Henti Muzik 🎵';
    }

    isPlaying = !isPlaying;
}