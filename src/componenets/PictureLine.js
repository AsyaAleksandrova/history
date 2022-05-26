import { PopupPicturePreview } from "./PopupPicturePreview.js";

export class PictureLine{
   constructor(container) {
      this._template = document.querySelector('#photo').content;
      this._userCard = this._template.querySelector('.photo-line__container').cloneNode(true);
      this._picture = this._userCard.querySelector('.photo-line__picture');
      this._year = this._userCard.querySelector('.photo-line__year');
      this._ref = this._userCard.querySelector('.photo-line__ref');
      this._container = container
   }

   _setListener() {
      this._userCard.addEventListener('click', () => {
         const popup = new PopupPicturePreview('.popup_type_foto-preview');
         popup.setEventListeners();
         popup.open(this._picture, this._ref, this._ref);
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

   insertPicture(element) {
      this._createPicture(element);
      this._container.append(this._userCard);
   }
}
