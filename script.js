let count = 0;
const counterDisplay = document.getElementById('counter');
const headClick = document.getElementById('headClick');
const char = document.getElementById('character');

// Ganti dengan file suara kamu
const sound = new Audio('klik.mp3'); 

headClick.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;

    // Efek: Karakter sedikit bergetar
    char.style.transform = "scale(0.95)";
    setTimeout(() => { char.style.transform = "scale(1)"; }, 100);

    // Mainkan suara
    sound.currentTime = 0;
    sound.play();
});
