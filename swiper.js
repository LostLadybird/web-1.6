new Swiper('.swiper-container', {
  slidesPerView: 1.3,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    640: {
      slidesPerView: 2.8,
      spaceBetween: 40,
    },
  }
});
