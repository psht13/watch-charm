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

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
///load more

let loadMoreBtn = document.querySelector('#js-load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.js-catalogue-block')];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = 'block';
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
