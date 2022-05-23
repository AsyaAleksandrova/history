import './index.css'


const arrowSlider = document.querySelector('.main__scroll-image');
const lineSlider = document.querySelector('.main__scroll-line')
const cover = document.querySelector('.main__overflow_black');
const icons = document.querySelectorAll('.menu__icon');
const openSubtitle = document.querySelector('.main__open-menu');

// const slidePosition = (e) => {
//    cover.setAttribute('style', `width: ${e.pageX}px`);
//    lineSlider.setAttribute('style', `left: ${e.pageX}px`);
//    arrowSlider.setAttribute('style', `left: ${e.pageX}px`);
// }

// arrowSlider.addEventListener('mousedown', () => {
//    document.addEventListener('mousemove', slidePosition, true);
//    document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', slidePosition, true)
//    })
// })

//arrowSlider.addEventListener('touchmove', (e) => slidePosition(e));

lineSlider.addEventListener('input', (e) => {
   const pos = e.target.value;
   cover.setAttribute('style', `width: ${pos}%`);
   arrowSlider.setAttribute('style', `left: ${pos}%`);
})


function notActive(icons) {
   let a = true;
   icons.forEach(icon => {
      a = a && !icon.classList.value.includes('active');
   })
   return a;
}

icons.forEach(icon => {
   icon.addEventListener('click', () => {
      icon.classList.toggle('menu__icon_active');
      icon.closest('.menu__item').querySelector('.menu__text').classList.toggle('menu__text_active');
      if (icon.closest('.menu__item').querySelector('.main__subtitle-container')) {
         document.querySelector('.main__subtitle-container').classList.toggle('main__subtitle-container_active');
         document.querySelector('.main__menu').classList.toggle('main__menu_large'); 
      }
           
      if (notActive(icons)) {
         document.querySelector('.main__menu').classList.remove('main__menu_active');
         document.querySelector('.main__subtitle-container').classList.remove('main__subtitle-container_active');
         document.querySelector('.main__menu').classList.remove('main__menu_large');         
      } else {
         document.querySelector('.main__menu').classList.add('main__menu_active');
      }
   })
})

openSubtitle.addEventListener('click', () => {
   document.querySelector('.main__subtitle-container').classList.toggle('main__subtitle-container_active');
   document.querySelector('.main__menu').classList.toggle('main__menu_large');
})
