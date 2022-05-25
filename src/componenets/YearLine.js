
export class YearLine{
   constructor(yearStart, yearEnd, container) {
      this._yearStart = yearStart;
      this._yearEnd = yearEnd;
      this._yearLine = [];
      this._container = container;
   }

   insertYearLine() {
   for (let i = this._yearStart; i <= this._yearEnd; i++) {
      const elem = document.createElement('p');
      this._container.append(elem);
      elem.textContent = i;
      elem.classList.add('animation-line__year');
      elem.id = i;
      this._yearLine.push(elem);
   }      
   }
}