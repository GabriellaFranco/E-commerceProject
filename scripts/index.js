let slideIndex = 1;

function slideResponsivity(position) {

    let slides = document.getElementsByClassName("feature-section-card");
    let dots = document.getElementsByClassName("dot");

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

function currentSlide(i) {
    slideResponsivity(i);
}

function toggleMenu() {
    document.querySelector(".navbar ul").classList("show")
}