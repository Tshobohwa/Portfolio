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
const popup = document.querySelector('.popup');
popup.classList.add('popup-hidden');


/**
 * This class can return works objects
 */
class Work {
  /**
   * @param {string} id
   * @param {string} imgSrc
   * @param {string} name
   * @param {string} smallDescription
   * @param {string} summary
   * @param {string} usedTools
   *  */
  constructor(id, imgSrc, name, smallDescription,
      summary, usedTools) {
    this.id = id;
    this.imgSrc = imgSrc;
    this.name = name;
    this.smallDescription = smallDescription;
    this.summary = summary;
    this.usedTools = usedTools;
  }

  /**
   * This function shows the popup on the page
   * */
  #displayPopup() {
    popup.innerHTML = `    
    <div class="popup-container">
      <div class="popup-header">
        <div class="popup-top">
          <h2 class="work-name title">${this.name}</h2>
          <button class="close-popup__btn">
            <img src="icons/reject-popup.png" alt="exit" 
            class="close-popup__icon">
          </button>
        </div>
        <h4 class="small-description">
          ${this.#CreateSmallDescriptionHTML()}
        </h4>
      </div>
      <div class="popup-image__container">
        <img src="${this.imgSrc}" alt="work image" class="popup-image">
      </div>
      <div class="popup-footer">
        <p class="work-descripton-mobile">${this.summary}
          releorem Ipsum is simply dummy text of the printing and
           typesetting industry. Lorem Ipsum han printer took a galley of
          type and scrambled it 1960s with the releawn printer took </p>
        <p class="work-description-desktop">${this.summary}
         typesetting industry. Lorem Ipsum
         has been the industry's
          standard dummy text ever 
          since the 1500s, when an unknown printer took a
           galley of type and scrambled it 1960s with the
          releorem Ipsum is simply dummy text of the printing and
           typesetting industry. Lorem Ipsum han printer took a galley of
          type and scrambled it 1960s with the releawn printer took 
          a galley of type and scrambled it 1960s with the releaLorem
          Ipsum is simply dummy text of the printing and typesetting
           industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
           type and scrambled it 1960s with the relea
        </p>
        <div class="popup-tools-and-btn">
          <div class="popup-work__tools">${this.#createUsedToolsHTML()}
          </div>
          <div class="popup-work__tools popup-work-tools__desktop">
            <div class="tool">Github</div>
            <div class="tool">Ruby</div>
            <div class="tool">Bootstrap</div>
          </div>
          <div class="popup-btn__container">
            <button class="popup-btn portfolio-btn">
              See live <img src="icons/popup-see-project.png" alt="icon"
                class="popup-btn__icon"></button>
            <button class="popup-btn portfolio-btn">
              See Source <img src="icons/popup-github.png" alt="icon"
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
      if (e.target.classList.contains('popup')) {
        popup.classList.add('popup-hidden');
      }
    });
  }
  /**
 *
 * @return {string} toolsHTML
 */
  #createUsedToolsHTML() {
    let toolsHTML = '';
    this.usedTools.forEach((tool) => {
      toolsHTML += `<li class="tool">${tool}</li>`;
    });
    return toolsHTML;
  }

  /**
   * @return {string}
   */
  #CreateSmallDescriptionHTML() {
    return `
      ${this.smallDescription[0]}
          <span class="small-description-highlight">
            <img src="icons/Counter.png" class="counter"
             alt="counter"/> ${this.smallDescription[1]}
            <img src="icons/Counter.png" class="counter" alt="counter"/>
             ${this.smallDescription[2]}</span>
        `;
  }

  /**
 * this function shows programaticaly the work cards on the page
 */
  showWorkCard() {
    workSection.insertAdjacentHTML('beforeend', `
    <div class="work" id="${this.id}">
      <img src="${this.imgSrc}" class="work-image" alt="work image">
      <div class="work-description">
        <h3 class="work-name title">${this.name}</h3>
        <h4 class="small-description">
        ${this.#CreateSmallDescriptionHTML()}
        </h4>
        <p class="work-summary">${this.summary}
        </p>
        <ul class="work-used-tools">${this.#createUsedToolsHTML()}
        </ul>
          <button class="portfolio-btn" id="see-project-btn-${this.id}">
            See Project</button>
      </div>
    </div>
    `);
    workSection.querySelector(`#see-project-btn-${this.id}`)
        .addEventListener('click', this.#displayPopup.bind(this));
  }
}

// Creation of an array of work object instances of the Work class

const works = [
  new Work(
      'work-1',
      'images/Snapshoot-Portfolio-1-desktop.png',
      'Multi-Post Stories',
      ['FACEBOOK', 'Full Stack Dev', 'JavaScript'],
      `
      A daily selection of privately personalized reads; no accounts or
      sign-ups required.`,
      ['html', 'css', 'javascript'],

  ),
  new Work(
      'work-2',
      'images/Snapshoot-Portfolio-2-desktop.png',
      'Facebook 360',
      ['FACEBOOK', 'Full Stack Dev', 'JavaScript'],
      `
    Experimental content creation feature that allows users to add
     to an existing 
    story over the course of a day without spamming their friends.`,
      ['html', 'css', 'Ruby on rails', 'javascript'],
  ),
  new Work(
      'work-3',
      'images/Snapshoot-Portfolio-3-desktop.png',
      'Tonic',
      ['FACEBOOK', 'Full Stack Dev', '2016'],
      `
      Exploring the future of media in Facebook's first Virtual Reality app;
       a place to discover and enjoy 360 photos and videos on Gear VR.`,
      ['html', 'css', 'Ruby on rails', 'javascript'],
  ),
  new Work(
      'work-4',
      'images/Snapshoot-Portfolio-4-desktop.png',
      'Uber Navigation',
      ['Uber', 'Lead Developer', '2018'],
      `
      A smart assistant to make driving more safe, efficient,
       and fun by unlocking
       your most expensive computer: your car.`,
      ['html', 'css', 'Ruby on rails', 'javascript'],
  ),
];

// showing on the page each work card
works.forEach((work) => work.showWorkCard());


// Form validation
const contactForm = document.querySelector('.footer-form');
const emailInput = document.querySelector('.email-input');
const validationMsg = document.querySelector('.validation-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailAddress = emailInput.value;
  if (emailAddress !== emailAddress.toLowerCase()) {
    validationMsg.textContent = 'The email must not include capital letters!';
  } else {
    validationMsg.textContent ='';
    contactForm.submit();
  }
});
