export class SettingsMenu{
   constructor(menuSelector, buttonSelector, switchButtonsSelector) {
      this.__menu = document.querySelector(menuSelector);
      this._button = this.__menu.querySelector(buttonSelector);
      this._radioList = this.__menu.querySelectorAll(switchButtonsSelector);
      this._eventsContainer = document.querySelector('.events-line');
      this._photoContainer = document.querySelector('.photo-line');
   }

   _addElements(input) {
      this._eventsContainer.querySelectorAll(`.${input}`).forEach(item => {
         item.classList.remove('events-line__item_hidden');
      });
   }

   _removeElements(input) {
      this._eventsContainer.querySelectorAll(`.${input}`).forEach(item => {
         item.classList.add('events-line__item_hidden');
      })
   }

   _changeDisplay(valueDisplay) {
      switch (valueDisplay) {
         case "gallery":
            this._eventsContainer.classList.add('events-line_display_gallery');
            this._eventsContainer.classList.remove('events-line_display_message');
            this._photoContainer.classList.add('photo-line_display_gallery');
            this._photoContainer.classList.remove('photo-line_display_message');
            break;
         case 'messages':
            this._eventsContainer.classList.remove('events-line_display_gallery');
            this._eventsContainer.classList.add('events-line_display_message');
            this._photoContainer.classList.remove('photo-line_display_gallery');
            this._photoContainer.classList.add('photo-line_display_message');
            break;
         default: 
            this._eventsContainer.classList.remove('events-line_display_gallery');
            this._eventsContainer.classList.remove('events-line_display_message');
            this._photoContainer.classList.remove('photo-line_display_gallery');
            this._photoContainer.classList.remove('photo-line_display_message');
      }
   }

   _findAction(input) {
      if (input.checked) {
         input.closest('.settings-line__label').querySelector('.settings-line__radio').classList.add('settings-line__radio_active');
         if (input.name == 'display') {
            this._changeDisplay(input.value);
         } else {
            this._addElements(input.name);
         }
      } else {
         input.closest('.settings-line__label').querySelector('.settings-line__radio').classList.remove('settings-line__radio_active');
         if (input.name != 'display') {
            this._removeElements(input.name);
         }
      };      
   }

   _listenChecked() {
      this._radioList.forEach(input => {
         this._findAction(input);
         input.addEventListener('click', () => {
            this._findAction(input);
         });
      });    
   }

   _listenHideButton() {
      this._button.addEventListener('click', () => {
         this._button.classList.toggle('settings-line__hide-icon_hidden');
         this.__menu.classList.toggle('settings-line_hidden');
      });
   }

   _listenScroll(){
      window.addEventListener('scroll', () => {
         this._button.classList.add('settings-line__hide-icon_hidden');
         this.__menu.classList.add('settings-line_hidden');
      });
   }

   setListeners() {
      this._listenChecked();
      this._listenHideButton();
      this._listenScroll();
   }
}