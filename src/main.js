
  // mobile menu 
  let openButton = document.getElementById('menu-open-btn');
  let removeButton = document.getElementById('menu-exit-btn');
  let element = document.getElementById('mobile-menu');

  openButton.addEventListener('click', function () {
    element.classList.add('is-open');
  });

  removeButton.addEventListener('click', function () {
    element.classList.remove('is-open');
  });


  // sale
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    grabCursor: true,
    mousewheel: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        direction: 'horizontal',
        spaceBetween: 5,
        slidesPerView: 4,
      },

      // when window width is >= 768px
      768: {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 4,
      },
    },
  });
  var swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
