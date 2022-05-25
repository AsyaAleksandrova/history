export class Height{
   constructor(propertyName = '--vh') {
      this._height = window.innerHeight * 0.01;
      this._name = propertyName
   }

   _setHeight() {
      this._height = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(this._name, `${this._height}px`);
   }

   _listenHeight() {
      window.addEventListener('resize', () => this._setHeight());
   }

   setAttribute() {
      this._setHeight();
      this._listenHeight();
   }
}