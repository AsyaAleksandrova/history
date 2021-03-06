import './timeline.css'

import { eventList } from '../utils/eventsList.js';
import { photoList } from '../utils/photoList.js'

const animationLine = document.querySelector('.animation-line');
const pictureLine = document.querySelector('.photo-line');
const eventsLine = document.querySelector('.events-line');

import { Canvas } from '../componenets/Canvas.js';
const canvas = new Canvas(animationLine, 'canvas');

import { PictureLine } from '../componenets/PictureLine.js';
import { EventMessage } from '../componenets/EventLine.js';
import { YearLine } from '../componenets/YearLine.js';


let firstYear = 1613;
let lastYear = 1703;

photoList.sort((a, b) => a.yearStart - b.yearStart)

photoList.forEach(photo => {
   const newPhoto = new PictureLine(pictureLine);
   newPhoto.insertPicture(photo);
})

eventList.sort((a, b) => a.yearStart - b.yearStart)

eventList.forEach(event => {
   const newEvent = new EventMessage(eventsLine);
   newEvent.insertEvent(event);
})

const yearLine = new YearLine(firstYear, lastYear, animationLine);
yearLine.insertYearLine();



// const h = Math.max(pictureLine.getBoundingClientRect().height,
//    eventsLine.getBoundingClientRect().height,
//    animationLine.getBoundingClientRect().height);

// animationLine.setAttribute('style', `height: ${h}px`);
// eventsLine.setAttribute('style', `height: ${h}px`);
// pictureLine.setAttribute('style', `height: ${h}px`);









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

import { SettingsMenu } from '../componenets/SettingsMenu.js';

const setMenu = new SettingsMenu('.settings-line', '.settings-line__hide-icon', '.settings-line__radio-input');
setMenu.setListeners();






// const drawLine = () => {
//    const colorMain = window.getComputedStyle(document.querySelector('.animation-line__year')).color;
//    const canvas = document.querySelector('.animation-line__canvas');
//    const ctx = canvas.getContext('2d');
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//    ctx.lineWidth = "2";
//    ctx.setLineDash([22, 10]);
//    ctx.lineDashOffset = offset / 1.5;
//    ctx.strokeStyle = colorMain;
//    ctx.beginPath();
//    ctx.moveTo(60, 20)
//    ctx.lineTo(60, indexHight / 2.6)
//    ctx.stroke();
//    ctx.strokeStyle = `rgba(246, 172, 82, 1)`;
//    ctx.beginPath();
//    ctx.moveTo(60, indexHight / 2.6)
//    ctx.lineTo(60, indexHight)
//    ctx.stroke();

//    const eventList = Array.from(areaEvents.querySelectorAll('.events-line__item'));

//    eventList.forEach((event) => {
//       ctx.strokeStyle = colorMain;
//       ctx.setLineDash([]);
//       ctx.lineWidth = "1";
      
//       const eventStart = event.querySelector('.events-line__year-start').textContent;
//       const pointStart = document.getElementById(eventStart).getBoundingClientRect().bottom - 10;
//       const eventEnd = event.querySelector('.events-line__year-end').textContent;
//       const pointEnd = document.getElementById(eventEnd).getBoundingClientRect().bottom - 10;

//       if (eventStart === eventEnd) {
//          const topPoint = pointStart + 10;
//          const bottomPoint = pointStart - 10;
//          ctx.beginPath();
//          ctx.moveTo(70, pointStart);
//          ctx.lineTo(80, topPoint);
//          ctx.lineTo(80, bottomPoint);
//          ctx.lineTo(70, pointStart);
//          ctx.stroke();
//       } else {
//          const center = pointStart + (pointEnd - pointStart);
//          ctx.beginPath();
//          ctx.moveTo(70, pointStart);
//          ctx.bezierCurveTo(90, pointStart, 90, center, 70, pointEnd);
//          ctx.stroke();
//       };
//    });
// };

// const changePictuteList = (startY, finishY, inverse) => {
//    const pictureList = Array.from(areaPictures.querySelectorAll('.photo-line__year'));

//    pictureList.forEach((item) => {
//       if (item.textContent > finishY || item.textContent < startY) {
//          item.closest('.photo-line__container').remove();
//       }
//    })

//    photoList.forEach(card => {
//       if (Number(card.yearStart) < Number(finishY) && (Number(card.yearStart) > Number(startY) || Number(card.yearStart) === Number(startY))) {

//          const existCard = pictureList.some(function (item) {
//             return Number(item.textContent) === Number(card.yearStart);
//          });
//          if (!existCard) {
//             insertPicture(card, inverse);
//          }
         
//       };
//    });
// };

// const changeEventList = (startY, finishY, inverse) => {
//    const evStartList = Array.from(areaEvents.querySelectorAll('.events-line__year-start'));

//    evStartList.forEach((item) => {
//       if (item.textContent > finishY || item.textContent < startY) {
//          item.closest('.events-line__item').remove();
//       }
//    })

//    eventList.forEach(card => {
//       if (Number(card.yearStart) < Number(finishY) && (Number(card.yearStart) > Number(startY) || Number(card.yearStart) === Number(startY))) {

//          const existCard = evStartList.some(function (item) {
//             return Number(item.textContent) === Number(card.yearStart);
//          });
//          if (!existCard) {
//             insertEvent(card, inverse);
//          }        
//       };     
//    });
// };