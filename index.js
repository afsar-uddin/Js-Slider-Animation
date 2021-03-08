const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
    // get current class 
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // check for next slide 
    if(current.nextElementSibling) {
        // Add current to sibling
        current.nextElementSibling.classList.add('current'); 
    } else {
        // Back to first slide
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', () => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

const prevSlide = () => {
    // get current class 
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // check for previous slide 
    if(current.previousElementSibling) {
        // Add current to sibling
        current.previousElementSibling.classList.add('current'); 
    } else {
        // Back to first slide
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

prev.addEventListener('click', () => {
    prevSlide();
})

// Auto slide 
if(auto) {
    // run next slide at interval time 
    slideInterval = setInterval(nextSlide, intervalTime);
}