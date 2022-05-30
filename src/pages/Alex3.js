import './Alex3.css'

import { Theme } from '../componenets/Theme.js';
const ThemePage = new Theme('.header__theme-switcher',("themesun", "thememon"), '.link-href');
ThemePage.initTheme();

import { Height } from '../componenets/Height.js';
const pageHeight = new Height('--vh');
pageHeight.setAttribute();

import { PopupWithSubtitle } from '../componenets/PopupWithSubtitle.js';
const popupMenu = new PopupWithSubtitle('.popup_type_menu');
popupMenu.setEventListeners();
document.querySelector('.header__burger').addEventListener('click', () => popupMenu.open());


const consort = document.querySelectorAll('.info__person-container');
const title = document.querySelector('.info__name');
const backPicture = document.querySelector('.parallax');
const allText = document.querySelectorAll('.personal-page__dynamic');

consort.forEach(card => {
   card.addEventListener('click', () => {
      card.classList.toggle('info__person-container_active');
      card.querySelector('.info__person').classList.toggle('info__person_active')
      card.querySelector('.info__relative-name').classList.toggle('info__relative-name_active');
      card.querySelector('.info__relative-description').classList.toggle('info__relative-description_active');
      card.querySelector('.info__relative-photo').classList.toggle('info__relative-photo_active');
   })
});

const dropTitle = () => {
   let indexHight = window.innerHeight;
   let bottomTitle = title.getBoundingClientRect().bottom;
   if (bottomTitle < (indexHight / 3)) {
      title.classList.add('info__name_drop');
   }  
   if (bottomTitle > (indexHight / 1)) {
      title.classList.remove('info__name_drop');
   }  
};

const parallax = () => {
   backPicture.setAttribute('style', `transform: translateY(${scrollY * (0.5)}px)`)
}

const showText = () => {
   let indexHight = window.innerHeight;
   allText.forEach(text => {
      let topText = text.getBoundingClientRect().top;
      if (topText < (indexHight)) {
         text.setAttribute('style', `transform: translateY(0px); opacity: 1;`);
      }
      if (topText > (indexHight)) {
         text.setAttribute('style', `transform: translateY(70px); opacity: 0;`);
      }      
   })
}

window.onscroll = function (e) {
   dropTitle();
   parallax();
   showText();
};
