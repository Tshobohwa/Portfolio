'use strict';

const menuBtn = document.getElementById('hamburger-menu');
const exitMenuBtn = document.querySelector('.nav-exit-button');
const headerUl = document.getElementById('header-ul');

const portfolioLink = document.querySelector('.portfolio-link');
const aboutLink = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

const portfolioSection = document.getElementById('section-2');
const aboutSection = document.getElementById('section-3');
const contactSection = document.getElementById('portfolio-footer');

const displayNav = () => {
  headerUl.classList.add('header-ul-active');
};

const hideNav = () => {
  headerUl.classList.remove('header-ul-active');
};

exitMenuBtn.addEventListener('click', hideNav);
menuBtn.addEventListener('click', displayNav);

portfolioLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideNav();
  portfolioSection.scrollIntoView({behavior: 'smooth'});
});

aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideNav();
  aboutSection.scrollIntoView({behavior: 'smooth'});
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideNav();
  contactSection.scrollIntoView({behavior: 'smooth'});
});

const workSection = document.getElementById('section-2');
console.log(workSection);

const works = document.querySelectorAll('.work');
console.log(works);

// workSection.innerHTML = "";
