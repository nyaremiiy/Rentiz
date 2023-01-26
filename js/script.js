const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  });
}

const filter = document.querySelector('.filter');

if (filter) {
  const items = filter.querySelectorAll('.block-filter');

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');

      if (event.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent =
          event.target.textContent;
      }
    });
  });
}

const popuarSlider = new Swiper('.pr-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.arrow-slider-next',
    prevEl: '.arrow-slider-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-prev',
  },
});

const galleryItems = document.querySelectorAll('.gallery__item');
if (galleryItems.length > 0) {
  galleryItems.forEach((item) => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      effect: 'fade',
    });
  });
}
