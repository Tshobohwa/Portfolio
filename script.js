'use strict';

const menuBtn = document.querySelector('#hamburger-menu');
const exitMenuBtn = document.querySelector('.nav-exit-button');
const headerUl = document.querySelector('#header-ul');

const portfolioLink = document.querySelector('.portfolio-link');
const aboutLink = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

const portfolioSection = document.querySelector('#section-2');
const aboutSection = document.querySelector('#section-3');
const contactSection = document.querySelector('#portfolio-footer');

const displayNav = function() {
  headerUl.classList.add('header-ul-active');
};

const hideNav = function() {
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
