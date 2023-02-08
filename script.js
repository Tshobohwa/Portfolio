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
const works = document.querySelectorAll('.work');
workSection.innerHTML = '';

class Work {
  constructor(id, imgSrc, name, smallDescription, summary, usedTools, seeProjectBtn){
    this.id = id;
    this.imgSrc = imgSrc;
    this.name = name;
    this.smallDescription = smallDescription;
    this.summary = summary;
    this.usedTools = usedTools;
    this.seeProjectBtn = seeProjectBtn;
  }

  displayPopup(){
    popup.innerHTML = `    
    <div class="popup-container">
      <div class="popup-header">
        <div class="popup-top">
          <h2 class="work-name title">${this.name}</h2>
          <button class="close-popup__btn">
            <img src="icons/reject-popup.png" alt="exit" class="close-popup__icon">
          </button>
        </div>
        <h4 class="small-description">
          ${this.smallDescription}
        </h4>
      </div>
      <div class="popup-image__container">
        <img src="${this.imgSrc}" alt="work image" class="popup-image">
      </div>
      <div class="popup-footer">
        <p class="work-descripton-mobile">${this.summary}</p>
        <p class="work-description-desktop">${this.summary} typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
          releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of
          type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem
          Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
        </p>
        <div class="popup-tools-and-btn">
          <div class="popup-work__tools">${this.usedTools}
          </div>
          <div class="popup-work__tools popup-work-tools__desktop">
            <div class="tool">Github</div>
            <div class="tool">Ruby</div>
            <div class="tool">Bootstrap</div>
          </div>
          <div class="popup-btn__container">
            <button class="popup-btn portfolio-btn">See live <img src="icons/popup-see-project.png" alt="icon"
                class="popup-btn__icon"></button>
            <button class="popup-btn portfolio-btn">See Source <img src="icons/popup-github.png" alt="icon"
                class="popup-btn__icon"></button>
          </div>
        </div>
      </div>
    </div>`;
    popup.classList.remove('popup-hidden');
    popup.querySelector('.close-popup__btn').addEventListener('click', ()=> {
      popup.classList.add('popup-hidden');
    });
    popup.addEventListener('click', (e) =>{
      if (e.target.classList.contains('popup')){
        popup.classList.add('popup-hidden');
      }
    })
  }

  showWorkCard(){
    workSection.insertAdjacentHTML('beforeend', `
    <div class="work" id="${this.id}">
      <img src="${this.imgSrc}" class="work-image" alt="work image">
      <div class="work-description">
        <h3 class="work-name title">${this.name}</h3>
        <h4 class="small-description">
        ${this.smallDescription}
        </h4>
        <p class="work-summary">${this.summary}
        </p>
        <ul class="work-used-tools">${this.usedTools}
        </ul>
          <button class="portfolio-btn" id="see-project-btn-${this.id}">See Project</button>
      </div>
    </div>
    `);
    workSection.querySelector(`#see-project-btn-${this.id}`).addEventListener('click', this.displayPopup.bind(this))
  }
}

const popup = document.querySelector('.popup');
const workObjectArray = [];

popup.classList.add('popup-hidden');

works.forEach((wrk, i) => {
  const id  = `work-${i + 1}`;
  const imgSrc = wrk.querySelector('.work-image').src;
  const name = wrk.querySelector('.work-name').textContent;
  const smallDescription = wrk.querySelector('.small-description').innerHTML;
  const summary = wrk.querySelector('.work-summary').textContent;
  const usedTools =  wrk.querySelector('.work-used-tools').innerHTML;
  const seeProjectBtn = wrk.querySelector('.portfolio-btn');
  workObjectArray.push(new Work(id, imgSrc, name, smallDescription, summary, usedTools, seeProjectBtn));
  });

  workObjectArray.forEach(work => {
  work.showWorkCard();
})





