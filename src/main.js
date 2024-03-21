// sale
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  direction: 'vertical',
});
var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
