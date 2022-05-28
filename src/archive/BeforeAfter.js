export class BeforeAfter{
   constructor(arrow, cover, inputLine){
      this._inputLine = inputLine;
      this._arrow = arrow;
      this._cover = cover;
      this._inputValue = this._inputLine.getAttribute("max");
   }
   setListener() {
      this._inputLine.addEventListener('input', (e) => {
         const pos = e.target.value / this._inputValue * 100;
         this._cover.setAttribute('style', `width: ${pos}%`);
         this._arrow.setAttribute('style', `left: ${pos}%`);
      });
   }
}