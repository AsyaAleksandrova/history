

//!   Only for 3+ sides

export class Portrait{
   constructor(card, sideSelector) {
      this._card = card;
      this._sides = card.querySelectorAll(sideSelector);
      this._other = 'transform: perspective(600px) rotateY(180deg); opacity: 1;';
      this._front = 'transform: perspective(600px) rotateY(0deg); opacity: 1;';
      this._back = 'transform: perspective(600px) rotateY(-180deg); opacity: 0;';
   }
   setInfiniteSlider() {
      let i = 0
      this._sides[i].setAttribute('style', this._back);
      this._sides[i + 1].setAttribute('style', this._other); 
      this._sides[i + 2].setAttribute('style', this._front);
      i = 2;

      this._card.addEventListener('click', () => {
         this._sides.forEach(side => {
            side.setAttribute('style', this._back);
         });
         this._sides[i].setAttribute('style', this._other);
         if (i + 1 == this._sides.length) {
            i = 0;
         } else {
            i++;
         }
         this._sides[i].setAttribute('style', this._front);
      });
   }
}