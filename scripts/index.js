function activateMenu() {
    const navUl = document.querySelector("nav ul");
    navUl.classList.toggle("active");

    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            const navUl = document.querySelector("nav ul");
            navUl.classList.remove("active");
        });
    });
}

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

function emailValidator() {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('userEmail');
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const messageDiv = document.getElementById('message');

        if (!emailPattern.test(email)) {
            messageDiv.textContent = 'Per favore, inserisci un indirizzo email valido.';
            messageDiv.className = 'error';
        }
        else {
            messageDiv.textContent = 'Email inviata con successo!';
            messageDiv.className = 'success';
            emailInput.value = '';
        }
    });
}

emailValidator()

