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

// ======= Music Autoplay + Fade Controls =======
const bgMusic = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

function initAudio() {
    bgMusic.play().then(() => {
        console.log("Audio autoplay started (muted)");
    }).catch(() => {
        console.warn("Autoplay blocked. Will unmute after interaction.");
    });

    // Unmute on first user interaction
    const activate = () => {
        bgMusic.muted = false;
        bgMusic.play().catch(() => {});
        document.removeEventListener('click', activate);
    };
    document.addEventListener('click', activate);
}

// Show button after delay
window.addEventListener('load', () => {
    setTimeout(() => {
        toggleBtn.classList.add('visible');
    }, 2500); // fade in after 2.5s
    initAudio();
});

// Toggle music manually
toggleBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.muted = false;
        bgMusic.play();
        toggleBtn.textContent = '🔊';
    } else {
        bgMusic.pause();
        toggleBtn.textContent = '🔈';
    }
});

// ======= Auto-fade button =======
let hideTimeout;
function scheduleHide() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        toggleBtn.classList.add('hidden');
    }, 4000);
}

['mousemove', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, () => {
        toggleBtn.classList.remove('hidden');
        scheduleHide();
    });
});

scheduleHide();
