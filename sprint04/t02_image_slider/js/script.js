'use strict';

const slides = document.querySelectorAll('.slide'),
      prevArr = document.querySelector('.prev'),
      nextArr = document.querySelector('.next');

let slideIndex = 1;

showSlides(slideIndex)

function showSlides(n) {
    if (n < 1) slideIndex = slides.length;
    if (n > slides.length) slideIndex = 1;

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block'
}

function plusSlide(n) {
    showSlides(slideIndex += n)
}

prevArr.addEventListener('click', () => {
    plusSlide(-1);
    clearInterval(changeSlide);
})
nextArr.addEventListener('click', () => {
    plusSlide(1);
    clearInterval(changeSlide);
})

const changeSlide = setInterval(() => {
    plusSlide(1)
}, 3000)