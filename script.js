// ======= Contact Form =======
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent to the shadow realm.');
    form.reset();
});

// ======= Smooth Scroll =======
document.getElementById('ctaBtn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ======= Music Toggle =======
const bgMusic = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
let firstPlay = true;

// Show the button after 2.5 seconds
window.addEventListener('load', () => {
    setTimeout(() => toggleBtn.classList.add('visible'), 2500);
    scheduleHide();
});

toggleBtn.addEventListener('click', () => {
    if (firstPlay) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(err => console.warn('Play blocked:', err));
        toggleBtn.textContent = '⏸️';
        toggleBtn.classList.add('playing');
        firstPlay = false;
    } else if (bgMusic.paused) {
        bgMusic.play();
        toggleBtn.textContent = '⏸️';
        toggleBtn.classList.add('playing');
    } else {
        bgMusic.pause();
        toggleBtn.textContent = '▶️';
        toggleBtn.classList.remove('playing');
    }
});

// ======= Auto-hide Button =======
let hideTimeout;
function scheduleHide() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => toggleBtn.classList.add('hidden'), 4000);
}

['mousemove', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, () => {
        toggleBtn.classList.remove('hidden');
        scheduleHide();
    });
});
