import { PopupPicturePreview } from "./PopupPicturePreview.js";

export class PictureLine{
   constructor() {
      this._template = document.querySelector('#photo').content;
      this._userCard = this._template.querySelector('.photo-line__container').cloneNode(true);
      this._picture = this._userCard.querySelector('.photo-line__picture');
      this._year = this._userCard.querySelector('.photo-line__year');
      this._ref = this._userCard.querySelector('.photo-line__ref');
   }

   _setListener() {
      this._userCard.addEventListener('click', () => {
         const popup = new PopupPicturePreview('.popup_type_foto-preview');
         popup.open(this._picture, this._ref.href, this._ref.textContent);
      })
   }
   _createPicture(element) {
      this._picture.src = element.source;
      this._picture.alt = element.description;
      this._year.textContent = element.yearStart;
      this._ref.href = element.refLink;
      this._ref.textContent = element.refName;
      this._setListener();
   }

   insertPicture(element, container) {
      this._createPicture(element);
      container.append(this._userCard);
   }
}
