const sanskritIntro = document.getElementById("sanskritIntro");
const mantraText = document.getElementById("mantraText");


const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

const mantra = "मांगल्यं तन्तुनानेन धारणीयं मम जीवने।\nत्वं जीव शरदः शतम्॥";

let index = 0;

// Start Intro
window.onload = () => {
    bell.play().catch(()=>{});
    typeMantra();
};

function typeMantra() {
    if (index < mantra.length) {
        mantraText.innerHTML += mantra.charAt(index) === "\n" ? "<br>" : mantra.charAt(index);
        index++;
        setTimeout(typeMantra, 70);
    } else {
        setTimeout(() => {
            sanskritIntro.style.opacity = "0";
            setTimeout(() => {
                sanskritIntro.style.display = "none";
            }, 1500);
        }, 3000);
    }
}

// Open Invite
function openInvite() {
    opening.style.display = "none";
    mainContent.style.display = "block";
    music.play().catch(()=>{});
}

// Music Toggle
const bell = document.getElementById("bellSound");
const bgMusic = document.getElementById("bgMusic");

function goToHome() {

    // Play bell first
    bell.play().then(() => {

        // After bell ends, start music
        bell.onended = () => {
            bgMusic.play();
        };

    }).catch(() => {
        // Fallback: just play music
        bgMusic.play();
    });

    // Small delay before redirect
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1500);
} 
// Countdown
const weddingDate = new Date("December 15, 2026 19:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    document.getElementById("days").innerText = Math.floor(gap / (1000*60*60*24));
    document.getElementById("hours").innerText = Math.floor((gap % (1000*60*60*24)) / (1000*60*60));
    document.getElementById("minutes").innerText = Math.floor((gap % (1000*60*60)) / (1000*60));
    document.getElementById("seconds").innerText = Math.floor((gap % (1000*60)) / 1000);

}, 1000);

/* ================= OUR STORY TYPING EFFECT ================= */

const storySection = document.querySelector(".our-story");
const typedText = document.getElementById("typedStory");

const storyContent = `Love is not just about finding the right person, but creating the right relationship. 
It's not about how much love you have in the beginning but how much love you build until the end. 
We are starting our forever, and we want you to be part of it.`;

let hasTyped = false;

function typeStory() {
    if (index < storyContent.length) {
        typedText.innerHTML += storyContent.charAt(index);
        index++;
        setTimeout(typeStory, 35); // speed (lower = faster)
    }
}

window.addEventListener("scroll", () => {
    const sectionTop = storySection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint && !hasTyped) {
        hasTyped = true;
        typeStory();
    }
});

window.onload = () => {
    if(sessionStorage.getItem("musicPlaying")){
        const music = document.getElementById("bgMusic");
        music.play().catch(()=>{});
    }
};