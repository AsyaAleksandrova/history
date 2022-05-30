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

const container = document.querySelector('.main__slider')
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
         name.href = person.link.concat('#' + ThemePage._themePage);
      }
   })
}

const portraitSlider = new PortraitInfiniteRotation(container, '.main__portrait', 2);
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