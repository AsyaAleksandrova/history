import './timeline.css'

import { eventList } from '../utils/eventsList.js';
import { photoList } from '../utils/photoList.js'

// Set theme-switcher and height

const animationLine = document.querySelector('.animation-line');
const pictureLine = document.querySelector('.photo-line');
const eventsLine = document.querySelector('.events-line');

import { Canvas } from '../componenets/Canvas.js';
const canvas = new Canvas(animationLine, 'canvas');

import { YearLine } from '../componenets/YearLine.js';

let firstYear = 1613;
let lastYear = 1703;

const yearLine = new YearLine(firstYear, lastYear, animationLine);
yearLine.insertYearLine();

import { PictureLine } from '../componenets/PictureLine.js';

photoList.forEach(photo => {
   const newPhoto = new PictureLine();
   newPhoto.insertPicture(photo, pictureLine);
})

import { EventMessage } from '../componenets/EventLine.js'

eventList.forEach(event => {
   const newEvent = new EventMessage();
   newEvent.insertEvent(event, eventsLine);
})






import { Theme } from '../componenets/Theme.js';
const ThemePage = new Theme('.header__theme-switcher',("themesun", "thememon"), '.link-href');
ThemePage.initTheme();

import { Height } from '../componenets/Height.js';
const pageHeight = new Height('--vh');
pageHeight.setAttribute();


import { PopupWithSubtitle } from '../componenets/PopupWithSubtitle.js';
import { EventLine } from '../componenets/EventLine';
const popupMenu = new PopupWithSubtitle('.popup_type_menu');
popupMenu.setEventListeners();
document.querySelector('.header__burger').addEventListener('click', () => popupMenu.open());




// const wrapper = document.querySelector('.animation-line');
// const indexHight = window.innerHeight;
// let currentYear = 1620;
// let firstYear = 1612;
// let lastYear = 1630;
// const areaPictures = document.querySelector('.photo-line');
// const areaEvents = document.querySelector('.events-line');
// const templatePicture = document.querySelector('#photo').content;
// const templateEvent = document.querySelector('#event').content;
// let inverse = false;


// let offset = 0;

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

// const findCurrentYear = () => {
//    yearLine.forEach(year => {
//       const top = year.getBoundingClientRect().top;
//       if (top > (indexHight / 2.6)) {
//          year.classList.add('animation-line__year_color_gold');
//       } else {
//          year.classList.remove('animation-line__year_color_gold');
//          currentYear = year.textContent;
//       }
//       if (top < 0) {
//          firstYear = year.textContent;
//       };
//       if (top < (indexHight)) {
//          lastYear = year.textContent;
//       };
//    });
// };


// window.onload = function () {
//    setCanvas();
//    drawLine();
//    findCurrentYear();
//    changePictuteList(firstYear, lastYear, false);
//    changeEventList(firstYear, lastYear, false);
// }


// window.onscroll = function () {
//    if (offset > window.scrollY) {
//       inverse = true;
//    } else {
//       inverse = false;
//    }
//    offset = window.scrollY;
//    drawLine();
//    findCurrentYear();
//    changePictuteList(firstYear, lastYear, inverse);
//    changeEventList(firstYear, lastYear, inverse);
// }