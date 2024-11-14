const navbar1 = document.getElementById('navbar1');
const navbar2 = document.getElementById('navbar2');
const extended1 = document.getElementById('extended1');
const extended2 = document.getElementById('extended2');
const imgg = document.getElementById('imgg');
const navbar = document.getElementById('navbar')

let lastScrollTop = 0;
let isExtended1Open = false;
let isExtended2Open = false;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function closeAll() {
    extended1.classList.remove('active');
    extended2.classList.remove('active');
    isExtended1Open = false;
    isExtended2Open = false;
    imgg.classList.remove('rotated');
}

navbar1.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isExtended1Open) {
        closeAll();
    } else {
        closeAll();
        extended1.classList.add('active');
        isExtended1Open = true;
        imgg.classList.add('rotated');
    }
});

navbar2.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isExtended2Open) {
        closeAll();
    } else {
        closeAll();
        extended2.classList.add('active');
        isExtended2Open = true;
    }
});

document.addEventListener('click', (event) => {
    if (isExtended1Open && !extended1.contains(event.target) && !navbar1.contains(event.target)) {
        isExtended1Open = false;
        extended1.classList.remove('active');
        imgg.classList.remove('rotated');
    }
});

document.addEventListener('click', (event) => {
    if (isExtended2Open && !extended2.contains(event.target) && !navbar2.contains(event.target)) {
        isExtended2Open = false;
        extended2.classList.remove('active');
    }
});

document.addEventListener('scroll', closeAll);

let currentIndex = 0;

const descriptions = [
    "Grand Theft Auto VI",
    "Red Dead Redemption",
    "Grand Theft Auto Online",
    "Grand Theft Auto Online"
];

const descriptionss = [
    "Trailer 1",
    "Coming to PC October 29",
    "New Ludendorff Cemetery Survival",
    "Bottom Dollar Bounties"
];

const buttonTexts = [
    "WATCH NOW",
    "WATCH NOW",
    "WATCH NOW",
    "WATCH NOW"
];

function slideTo(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('img').length;
    const buttons = document.querySelectorAll('.circle');

    if (index < 0 || index >= totalSlides) {
        return;
    }

    currentIndex = index;

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    document.getElementById('slide-description').textContent = descriptions[currentIndex];

    document.getElementById('description').textContent = descriptionss[currentIndex];

    document.getElementById('static-button').textContent = buttonTexts[currentIndex];

    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === currentIndex) {
            btn.classList.add('selected');
        }
    });
}

window.onload = function() {
    slideTo(currentIndex);
};