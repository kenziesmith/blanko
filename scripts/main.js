// параметры swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
});

let cords = ['scrollX', 'scrollY'];
// Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
window.addEventListener('unload', e => cords.forEach(cord => localStorage[cord] = window[cord]));
// Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
window.scroll(...cords.map(cord => localStorage[cord]));

const headerContent = document.querySelector('.header__content')
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  headerContent.classList.toggle('active');
  burger.classList.toggle('active');
});


