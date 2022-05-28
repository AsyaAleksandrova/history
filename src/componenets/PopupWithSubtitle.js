import { Popup } from "./Popup.js";

export class PopupWithSubtitle extends Popup{
   constructor(selector) {
      super(selector);
      this._titleList = document.querySelectorAll('.open-container');
   }
   setEventListeners() { 
      this._titleList.forEach(title => {
         title.addEventListener('click', () => {
            title.closest('.popup__title-container')
               .querySelector('.popup__subtitle-container')
               .classList.toggle('popup__subtitle-container_open')
         })
      });
      super.setEventListeners();
   }
   close() {
      this._popup.querySelectorAll('.popup__subtitle-container')
         .forEach(container => {
            container.classList.remove('popup__subtitle-container_open')
      })
      super.close();
   }
}