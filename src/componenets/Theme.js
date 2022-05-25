export class Theme{
   constructor(buttonSwitch, themeSelectors = ("themesun", "thememon"), linkChangeSelector) {
      this._button = document.querySelector(buttonSwitch);
      this._linkList = document.querySelectorAll(linkChangeSelector);
      this._themeList = themeSelectors;
      this._themePage = this._themeList[0];
   }

   _readTheme() {
      const str = document.location.href;
      if (str.includes('theme')) {
         this._themePage = str.slice((str.indexOf('theme')), (str.indexOf('theme') + 8));
      };
   }

   _switchLink(link) {
      let str = link.href;
      if (str.includes('theme')) {
         const oldTheme = str.slice((str.indexOf('theme')), (str.indexOf('theme') + 8));
         str = str.replace(oldTheme, this._themePage);
      } else {
         str = str.concat('#' + this._themePage);
      }
      link.href = str;
   }

   _toggleTheme() {
      this._switchLink(document.location);
      this._linkList.forEach(link => this._switchLink(link));
      if (this._themePage == "themesun") {
         this._button.classList.add('header__theme-switcher_light');
         document.querySelector('.root').classList.add('root_theme_light') 
      } else {
         this._button.classList.remove('header__theme-switcher_light');
         document.querySelector('.root').classList.remove('root_theme_light') 
      }
   }

   _setListenerButton() {
      this._button.addEventListener('click', () => {
         if (this._themePage == "themesun") {
            this._themePage = "thememon";
         } else {
            this._themePage = "themesun";
         }
         this._toggleTheme();
      });        
   }

   initTheme(){
      this._readTheme();
      this._toggleTheme();
      this._setListenerButton();
   }
}