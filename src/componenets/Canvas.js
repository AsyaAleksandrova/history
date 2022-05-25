export class Canvas{
   constructor(container, selector = null) {
      this._canvas = document.createElement('canvas');
      this._ctx = this._canvas.getContext('2d');
      this._container = container;
      this._selector = selector;
   }

   drawAngle(x1, y1, x2, y2, color = "#000000") {
      this._ctx.lineWidth = "0.7";
      this._ctx.strokeStyle = color;
      this._ctx.beginPath();
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.stroke();      
   };

   matchCards(card1, card2, color) {
      const x1 = card1.offsetLeft + (card1.getBoundingClientRect().width / 2);
      const y1 = card1.offsetTop + (card1.getBoundingClientRect().height / 2);
      const x2 = card2.offsetLeft + (card2.getBoundingClientRect().width / 2);
      const y2 = card2.offsetTop + (card2.getBoundingClientRect().height / 2);
      this.drawAngle(x1, y1, x2, y2, color);      
   }

   removeCanvas() {
      this._ctx.clearRect(0, 0, this._width, this._height);
      this._canvas.width = this._container.getBoundingClientRect().width;
      this._canvas.height = this._container.getBoundingClientRect().height;
   }

   setCanvas() {
      this._container.prepend(this._canvas);
      this._canvas.width = this._container.getBoundingClientRect().width;
      this._canvas.height = this._container.getBoundingClientRect().height;
      if (this._selector) {
         this._canvas.classList.add(this._selector);
      }
   }
}