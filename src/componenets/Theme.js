// Change theme

const buttonTheme = document.querySelector('.header__settings');
let themePage = 'unset'

toggleTheme = (themePage) => {
   switch (themePage) {
      case 'thememon':
         document.querySelector('.root').classList.remove('root_theme_light');
         document.querySelectorAll('.link-href').forEach(link => {
            link.href = link.href.replace('themesun', 'thememon');
         });
         buttonTheme.classList.remove('header__settings_light');
         document.location.href = document.location.href.replace('themesun', 'thememon');
         break;
      case 'themesun':
         document.querySelector('.root').classList.add('root_theme_light');
         document.querySelectorAll('.link-href').forEach(link => {
            link.href = link.href.replace('thememon', 'themesun');
         });
         buttonTheme.classList.add('header__settings_light');
         document.location.href = document.location.href.replace('thememon', 'themesun');
         break;
      default:
         document.location.href = document.location.href.concat('#themesun');
         themePage = 'themesun';
   };
   return themePage;
}

readTheme = () => {
   const str = document.location.href;
   if (str.includes('theme')) {
      themePage = str.slice((str.indexOf('theme')), (str.indexOf('theme') + 8));
   };
   return themePage;
}

themePage = readTheme();
themePage = toggleTheme(themePage);

buttonTheme.addEventListener('click', () => {
   if (themePage == 'themesun') {
      themePage = 'thememon';
   } else {
      themePage = 'themesun'
   }
   toggleTheme(themePage);
   return themePage;
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

(function init100vh(){
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();