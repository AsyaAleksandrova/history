import { Popup } from "./Popup.js";

export class PopupPicturePreview extends Popup{
   constructor(selector) {
      super(selector);
      this._picture = this._popup.querySelector('.popup__picture');
      this._description = this._popup.querySelector('.popup__description');
      this._sourceLink = this._popup.querySelector('.popup__picture-link');
      this._sourceRef = this._popup.querySelector('.popup__picture-ref');
   }
   open(picture, sourceLink = null, sourceRef = null) {
      this._picture.src = picture.src;
      this._description.textContent = picture.alt;
      if (sourceRef) {
         this._sourceLink.href = sourceLink.href;
         this._sourceRef.textContent = sourceRef.textContent;         
      } else {
         this._sourceLink.setAttribute('style', 'display: none;')
      }
      super.open();
   }
}