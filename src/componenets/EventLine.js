export class EventMessage{
   constructor(container) {
      this._template = document.querySelector('#event').content;
      this._userCard = this._template.querySelector('.events-line__item').cloneNode(true);
      this._title = this._userCard.querySelector('.events-line__title');
      this._description = this._userCard.querySelector('.events-line__description');
      this._link = this._userCard.querySelector('.events-line__link');
      this._start = this._userCard.querySelector('.events-line__year-start');
      this._end = this._userCard.querySelector('.events-line__year-end');
      this._container = container;
   }

   _setListener() {
      this._userCard.addEventListener('click', () => {
         this._userCard.classList.toggle('events-line__item_active');
      })
   }
   _createEvent(element) {
      this._title.textContent = element.title;
      this._description.textContent = element.description;
      this._link.href = element.link;
      this._start = element.yearStart;
      this._end = element.yearEnd;
      this._setListener();
   }

   insertEvent(element) {
      this._createEvent(element);
      this._container.append(this._userCard);
   }
}