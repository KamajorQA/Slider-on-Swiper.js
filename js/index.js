let currentTime = function () {
  console.log(new Date().getHours() + ':' + new Date().getMinutes());
};
currentTime();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,
  effect: 'slider', // slider, cards, coverflow, flip, fade, cube,
  // initialSlide: 1, // устанавливает начальное отображение с указанного слайда
  // slidesPerView: 2, // количество одновременно отображаемых слайдов
  // spacebetween: 20, // расстояние между соседними слайдами
  // centeredSlides: true, // центрироивание слайдов
  // freemode: true, // свободное пролистывание ленты

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // делает пагинацию кликабельной
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Autoplay
  // autoplay: {
  //   delay: 3000, // скорость перелистывания в мс
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
