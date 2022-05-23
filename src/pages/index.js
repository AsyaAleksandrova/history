import './index.css'

const arrowSlider = document.querySelector('.main__scroll-image');
const lineSlider = document.querySelector('.main__scroll-line')
const cover = document.querySelector('.main__overflow_black');
import { BeforeAfter } from '../componenets/BeforeAfter.js';
const slider = new BeforeAfter(arrowSlider, cover, lineSlider);
slider.setListener();

const menuSelectors = {
   menuSelector: '.menu',
   menuActiveMainSelector: 'menu_size_wide',
   menuActiveSubtitleSelector: 'menu_size_high',
   iconSelector: '.menu__icon',
   iconActiveSelector: 'menu__icon_active',
   titleSelector: '.menu__title',
   titleActiveSelector: 'menu__title_active',
   subtitleContainerSelector: '.menu__subtitle-container',
   subtitleContainerActiveSelector: 'menu__subtitle-container_active',
   itemSelector: '.menu__item'
}
import { IconMenu } from '../componenets/IconMenu.js';
const menuPage = new IconMenu(menuSelectors);
menuPage.setListenerMenu();