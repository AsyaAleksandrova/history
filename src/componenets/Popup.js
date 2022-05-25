export class Popup{
   constructor(selector) {
      this._popup = document.querySelector(selector);
      this._btnClose = this._popup.querySelector('.popup__btnClose');
   }

   _handleEscClose = (ev) => { 
      if (ev.key === "Escape") { 
         this.close(); 
      }       
   }

   setEventListeners() { 
      this._btnClose.addEventListener('click', () => this.close()); 
      this._popup.addEventListener('click', (ev) => { 
         if (ev.target === this._popup) { 
            this.close(); 
         } 
      })
   }

   open() { 
      document.addEventListener('keydown', this._handleEscClose); 
      this._popup.classList.add('popup_open'); 
      document.querySelector('.root').classList.add('root_locked');
      if (document.querySelector('.header')) {
         document.querySelector('.header').classList.add('header_hidden'); 
      }     
   } 

   close() { 
      document.removeEventListener('keydown', this._handleEscClose); 
      this._popup.classList.remove('popup_open'); 
      document.querySelector('.root').classList.remove('root_locked');
      if (document.querySelector('.header')) {
         document.querySelector('.header').classList.remove('header_hidden'); 
      } 
   } 
}