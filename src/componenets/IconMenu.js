export class IconMenu{
   constructor(menuSelectors) {
      this._menu = document.querySelector(menuSelectors.menuSelector);
      this._iconList = this._menu.querySelectorAll(menuSelectors.iconSelector);
      this._iconActive = menuSelectors.iconActiveSelector;
      this._title = menuSelectors.titleSelector;
      this._titleActive = menuSelectors.titleActiveSelector;
      this._subtitleContainer = menuSelectors.subtitleContainerSelector;
      this._containerList = this._menu.querySelectorAll(this._subtitleContainer);
      this._subtitleContainerActive = menuSelectors.subtitleContainerActiveSelector;
      this._item = menuSelectors.itemSelector;
      this._menuActiveMain = menuSelectors.menuActiveMainSelector;
      this._menuActiveSubtitle = menuSelectors.menuActiveSubtitleSelector;
   }

   _noActive(list) {
      let a = true;
      list.forEach(element => {
         a = a && !element.classList.value.includes('active');
      })
      return a;
   }

   _hideMainMenu() {
      if (this._noActive(this._iconList)) {
         this._menu.classList.remove(this._menuActiveMain);
      } else {
         this._menu.classList.add(this._menuActiveMain);
      }   
   }

   _hideLargeMenu() {
      if (this._noActive(this._containerList)) {
         this._menu.classList.remove(this._menuActiveSubtitle);
      } else {
         this._menu.classList.add(this._menuActiveSubtitle)
      }
   }

   _setListenerSubtitle(container, title) {
      title.addEventListener('click', () => {
         container.classList.toggle(this._subtitleContainerActive);
         this._menu.classList.toggle(this._menuActiveSubtitle);
      });
   }

   setListenerMenu() {
      this._iconList.forEach(icon => {
         const item = icon.closest(this._item);
         const title = item.querySelector(this._title);
         const container = item.querySelector(this._subtitleContainer);
         icon.addEventListener('click', () => {
            icon.classList.toggle(this._iconActive);
            title.classList.toggle(this._titleActive);
            if (container) {
               if (!icon.classList.value.includes('active')) {
                  container.classList.remove(this._subtitleContainerActive);
               }
            }
            this._hideMainMenu();
            this._hideLargeMenu();
         });
         if (container) { this._setListenerSubtitle(container, title) };
      });
   };
}