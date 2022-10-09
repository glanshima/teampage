/* const anime = require('animejs'); */
const header = document.querySelector('.header')
const contactForm = document.querySelector('.contact-form-section');
const contactUs = document.querySelector('.contact-form');
const staffLogin = document.querySelector('.staff-login-form');
const contactBtn = document.querySelector('.contact-select');
const staffLoginBtn = document.querySelector('.login-select');
const ourTeamText = document.querySelector('.our-team-hd');
const closeForm = document.querySelector('.form-close');
const teamFrame = document.querySelector('.team');
const siteTitle = document.querySelector('.site-title');
const serviceContainer = document.querySelector('.service-container');
const flashHeroBox = document.querySelector('.flash-hero');
const flashImgWide = document.querySelector('#flash-img-wide');
const flashImgNarrow = document.querySelector('#flash-img-narrow');
const serviceDescription = document.querySelector('.service-description');
const productSection = document.querySelector('.our-products');
const slideCaption = document.querySelector('.slide-caption');
const headerPos = header.getBoundingClientRect().top
let windowHeight = window.innerHeight;


function clickEvents(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    })
}



function setStickyHeader(e) {
    let sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {

        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}
/* 
window.addEventListener('scroll', e => {

    _.throttle(setStickyHeader(e), 100)

}) */




/* Contact Section Form Toggle Events */

contactForm.addEventListener('click', (e) => {
    if (e.target.matches('.contact-select')) {
        contactForm.style.cssText = "height: 28rem; padding-bottom: 1rem";
        contactUs.style.cssText = "right: 0";
        staffLogin.style.cssText = "right: -100";
        closeForm.style.cssText = "visibility: visible";
        serviceContainer.style.cssText = "width: 50%; translate: -50%;";
        serviceContainer.classList.add('opened-forms')
        flashHeroBox.classList.remove('login-clicked')
        flashHeroBox.style.cssText = "visibility: visible";
        serviceDescription.style.cssText = "display: none";
        productSection.style.cssText = "display: flex";
        flashImgNarrow.style.cssText = "translate: 0";
        flashImgWide.style.cssText = "translate:-100%";
        contactBtn.style.cssText = "opacity: 0";

    } else if (e.target.matches('.login-select')) {
        contactForm.style.cssText = "height: 19rem";
        staffLogin.style.cssText = "right: 0";
        contactUs.style.cssText = "right: -100";
        closeForm.style.cssText = "visibility: visible";
        serviceContainer.style.cssText = "width: 50%; translate: -50%;";
        serviceContainer.classList.add('opened-forms')
        flashHeroBox.classList.add('login-clicked');
        flashHeroBox.style.cssText = "height: 12rem; visibility: visible";
        flashImgWide.style.cssText = "translate: 0";
        flashImgNarrow.style.cssText = "translate: -100%";
        serviceDescription.style.cssText = "display: none";
        productSection.style.cssText = "display: flex";

    } else if (e.target.matches('.form-close')) {
        contactForm.style.cssText = "height:3.5rem";
        staffLogin.style.cssText = "right: -100";
        contactUs.style.cssText = "right: -100";
        closeForm.style.cssText = "visibility: hidden";
        serviceContainer.style.cssText = "width: 90%";
        serviceContainer.classList.remove('opened-forms')
        flashHeroBox.classList.remove('login-clicked')
        serviceDescription.style.cssText = "display: flex";
        flashHeroBox.style.cssText = "visibility: hidden";
        flashImgWide.style.cssText = "translate: -100%";
        productSection.style.cssText = "display: none";
    }
})

/* Hover Effect on Meet our Team Text */
teamFrame.addEventListener('mouseover', () => {

    ourTeamText.style.opacity = '0';

})
teamFrame.addEventListener('mouseout', () => {

        ourTeamText.style.opacity = '1';

    })
    /* Flashing Site Title Text */

setInterval(() => {

    siteTitle.classList.toggle("glow")
}, 5000)

const slidingImg = document.querySelectorAll('.carousel-item.img-mine');
slidingImg.forEach(imgSlide => {
    setTimeout(() => {
        imgSlide.classList.toggle("scale")
    }, 2500);
})



/* SLIDE FUNCTIONALITY */
let slides = document.querySelectorAll('.carousel-slide');
let dots = document.querySelectorAll('.dots');
let currentSlide = 0;

document.addEventListener('DOMContentLoaded', startSlide(currentSlide));
const autoSlide = setInterval(() => {
    nextSlide()
}, 20000);

clickEvents('click', '.slide-nav__btn-icon', (e) => {
    if (e.target.matches('.btn-prev')) {
        prevSlide(currentSlide)
    } else if (e.target.matches('.btn-next')) {
        nextSlide(currentSlide)
    }
})




dots.forEach((dot, i) => {

    dot.addEventListener('click', (e) => {
        startSlide(i);
        currentSlide = i;

    });


})





function startSlide(n) {

    slides.forEach(slide => {
        slide.style.display = 'none'
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    slides[n].style.display = 'block';
    dots[n].classList.add('active');
}

function nextSlide(n) {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
    startSlide(currentSlide);
}

function prevSlide(n) {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
    startSlide(currentSlide)
}