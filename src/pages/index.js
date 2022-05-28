import './index.css'

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

import { PortraitInfiniteRotation } from '../componenets/PortraitInfiniteRotation.js';

const container = document.querySelector('.onload')
const portraits = document.querySelectorAll('.onload__portrait');
const arrowNext = document.querySelector('.main__arrow_right');
const arrowPrev = document.querySelector('.main__arrow_left');
const name = document.querySelector('.main__active-name');
const yearStart = document.querySelector('.main__year-start');
const yearEnd = document.querySelector('.main__year-end');

import { family } from '../utils/family.js';


const changeName = () => {
   const currentName = container.querySelector('.active').alt;
   name.textContent = currentName;
   family.forEach(person => {
      if (person.name == currentName) {
         yearStart.textContent = person.yearStart;
         yearEnd.textContent = person.yearEnd;
      }
   })
}

const fixPortrait = (portrait) => {
   portrait.classList.add('onload__portrait_fixed');
}

const intervalFix = (portraits) => {
   for (let i = 0; i < 4; i++){
      setTimeout(fixPortrait, 1000, portraits[i]);
   }
   for (let i = 4; i < portraits.length; i++){
      let t = ((i - 3)* 1000);
      setTimeout(fixPortrait, t, portraits[i]);
   }
   setTimeout(() => {
      container.classList.add('onload_fixed');
      portraits.forEach(portrait => portrait.classList.add('main__shadow'));
      const portraitSlider = new PortraitInfiniteRotation(container, '.onload__portrait', 2);
      portraitSlider.setInfiniteSlider();
      container.addEventListener('click', () => changeName());
      arrowPrev.addEventListener('click', () => {
         portraitSlider.rotateBackward();
         changeName();
      });
      arrowNext.addEventListener('click', () => {
         portraitSlider.rotateForward();
         changeName();
      });
   }, 15000);
}

intervalFix(portraits);

