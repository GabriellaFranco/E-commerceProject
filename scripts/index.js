let slideIndex = 1;

function slideResponsivity(position, className) {

    let slides = document.getElementsByClassName(className);
    let dots = document.getElementsByClassName(`${className}-dot`);

    if (position > dots.length) {
        slideIndex = 1;
    } else if (position < 1) {
        slideIndex = dots.length;
    } else {
        slideIndex = position;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (slideIndex <= slides.length) {
        slides[slideIndex - 1].classList.add("active");
    }
    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(i, className) {
    slideResponsivity(i, className);
}

function toggleMenu() {
    document.querySelector(".navbar ul").classList("show")
}