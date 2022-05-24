export class Canvas{
   constructor(width, height, container, selector = null) {
      this._canvas = document.createElement('canvas');
      this._ctx = this._canvas.getContext('2d');
      this._width = width;
      this._height = height;
      this._container = container;
      this._selector = selector;
   }

   drawAngle(x1, y1, x2, y2, color = "#000000") {
      this._ctx.lineWidth = "1";
      this._ctx.strokeStyle = color;
      this._ctx.beginPath();
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.stroke();      
   };

   matchCardsLeftDown(card1, card2, cardWidth, cardHeight, color) {
      const x1 = card1.getBoundingClientRect().left + scrollX;
      const y1 = card1.getBoundingClientRect().top + scrollY;
      const x2 = card2.getBoundingClientRect().right + scrollX - (cardWidth / 2);
      const y2 = card2.getBoundingClientRect().top + scrollY - (cardHeight / 2.5);
      this.drawAngle(x1, y1, x2, y2, color);      
   }

   matchCardsRightDown(card1, card2, cardWidth, cardHeight, color) {
      const x1 = card1.getBoundingClientRect().right + scrollX;
      const y1 = card1.getBoundingClientRect().top + scrollY;
      const x2 = card2.getBoundingClientRect().left + scrollX + (cardWidth / 2);
      const y2 = card2.getBoundingClientRect().top + scrollY - (cardHeight / 2.5);
      this.drawAngle(x1, y1, x2, y2, color);        
   }

   removeCanvas() {
      this._ctx.clearRect(0, 0, this._width, this._height);
   }

   setCanvas() {
      this._container.prepend(this._canvas);
      this._canvas.width = this._width;
      this._canvas.height = this._height;
      if (this._selector) {
         this._canvas.classList.add(this._selector);
      }
   }
}