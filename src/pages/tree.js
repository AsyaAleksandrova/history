import './tree.css'

// Set videi-speed
const bgVideo = document.querySelector('.tree__background-video');
bgVideo.playbackRate = 0.5;
bgVideo.addEventListener('click', function () {
   bgVideo.play();
});

// Set sliders for portrait-cards 
import { Portrait } from '../componenets/Portrait.js';

const cardItems = document.querySelectorAll('.tree__item');

cardItems.forEach(card => {
   const newPortrait = new Portrait(card, '.tree__card-side');
   newPortrait.setInfiniteSlider();
})

// Draw canvas and match all cards in the tree

import { Canvas } from '../componenets/Canvas.js';

const content = document.querySelector('.tree');
const lineColor = "#f6ac52";
const card_1 = document.querySelector('.item_1');
const card_2 = document.querySelector('.item_2');
const card_3 = document.querySelector('.item_3');
const card_4 = document.querySelector('.item_4');
const card_5 = document.querySelector('.item_5');
const card_6 = document.querySelector('.item_6');
const card_7 = document.querySelector('.item_7');
const card_8 = document.querySelector('.item_8');
const card_9 = document.querySelector('.item_9');
const card_10 = document.querySelector('.item_10');
const card_11 = document.querySelector('.item_11');
const card_12 = document.querySelector('.item_12');
const card_13 = document.querySelector('.item_13');
const card_14 = document.querySelector('.item_14');
const card_15 = document.querySelector('.item_15');
const card_16 = document.querySelector('.item_16');
const card_17 = document.querySelector('.item_17');
const card_18 = document.querySelector('.item_18');
const card_21 = document.querySelector('.item_2_1');
const card_25 = document.querySelector('.item_2_5');
const card_26 = document.querySelector('.item_2_6');
const card_27 = document.querySelector('.item_2_7');



const redrawContent = () => {
   canvas.matchCards(card_1, card_2, lineColor);
   canvas.matchCards(card_2, card_3, lineColor);
   canvas.matchCards(card_2, card_4, lineColor);
   canvas.matchCards(card_2, card_5, lineColor);
   canvas.matchCards(card_4, card_8, lineColor);
   canvas.matchCards(card_5, card_10, lineColor);
   canvas.matchCards(card_6, card_10, lineColor);
   canvas.matchCards(card_11, card_13, lineColor);
   canvas.matchCards(card_12, card_13, lineColor);
   canvas.matchCards(card_13, card_14, lineColor);
   canvas.matchCards(card_13, card_15, lineColor);
   canvas.matchCards(card_15, card_16, lineColor);
   canvas.matchCards(card_16, card_17, lineColor);
   canvas.matchCards(card_17, card_18, lineColor);
   canvas.matchCards(card_21, card_2, lineColor);
   canvas.matchCards(card_5, card_25, lineColor);
   canvas.matchCards(card_25, card_7, lineColor);
   canvas.matchCards(card_26, card_11, lineColor);
   canvas.matchCards(card_6, card_26, lineColor);
   canvas.matchCards(card_27, card_9, lineColor);
   canvas.matchCards(card_8, card_27, lineColor);  
   setTimeout(function () {
      document.querySelector('.canvas').setAttribute('style', 'opacity: 1;');
   }, 2000)
}

const canvas = new Canvas(content, 'canvas');

window.onload = function () {
   card_2.scrollIntoView({block:"center", inline:"center"})
   canvas.setCanvas();
   redrawContent();
}

window.onresize = function () {
   canvas.removeCanvas();
   setTimeout(function () {
      redrawContent();
   }, 3000)
};


// Set theme-switcher and height

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
