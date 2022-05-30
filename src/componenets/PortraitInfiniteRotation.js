

//!   Only for 3+ sides
// Mind: backface-visibility: hidden;transition: transform 1s linear;

export class PortraitInfiniteRotation{
   constructor(container, sideSelector) {
      this._container = container;
      this._sides = this._container.querySelectorAll(sideSelector);
      this._other = `transform: perspective(600px) rotateY(180deg); opacity: 0;`;
      this._otherVisible = `transform: perspective(600px) rotateY(180deg); opacity: 1;`;
      this._front = `transform: perspective(600px) rotateY(0deg); opacity: 1;`;
      this._back = `transform: perspective(600px) rotateY(-180deg); opacity: 0;`;
      this._backVisible = `transform: perspective(600px) rotateY(-180deg); opacity: 1;`;
      this._pos = 0;
   }

   _resetAll() {
      this._sides[this._pos].classList.remove('active');
      this._sides.forEach(side => {
         side.setAttribute('style', this._back);
      });      
   }

   rotateForward() {
      this._resetAll();
      this._sides[this._pos].setAttribute('style', this._otherVisible);
      if ((this._pos + 1) == this._sides.length) {
         this._pos = 0;
      } else {
         this._pos++;
      }
      this._sides[this._pos].setAttribute('style', this._front); 
      this._sides[this._pos].classList.add('active');
   }
   rotateBackward() {
      this._resetAll();
      this._sides[this._pos].setAttribute('style', this._backVisible);
      if (this._pos == 0) {
         this._pos = this._sides.length - 1;
      } else {
         this._pos = this._pos - 1;
      }
      if (this._pos == 0) {
         this._sides[this._sides.length - 1].setAttribute('style', this._other);
      } else {
         this._sides[this._pos - 1].setAttribute('style', this._other);
      }
      this._sides[this._pos].setAttribute('style', this._front);
      this._sides[this._pos].classList.add('active');
   }

   setInfiniteSlider() {
      for (let n = 0; n < (this._sides.length - 2); n++){
         this._sides[n].setAttribute('style', this._back);
      }
      this._sides[0].setAttribute('style', this._backVisible);
      this._sides[this._sides.length - 2].setAttribute('style', this._otherVisible); 
      this._sides[this._sides.length - 1].setAttribute('style', this._front);
      this._pos = this._sides.length - 1;
      
      this._container.addEventListener('click', () => {
         this.rotateForward();
      });
   }
}