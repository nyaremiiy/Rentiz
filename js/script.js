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

gsap.fromTo('.header__container',{
  y: -5,
  opacity: 0,
  delay: 2,
  duration: 1,
  // position: relative,
},{
  y: 0,
  opacity: 1,
  delay: 1.5,
  duration: 1,
  // position: relative,
  zIndex: 10
})
gsap.from('.menu',{
  y: -10,
  opacity: 0,
  delay: 2,
  duration: 1
})
gsap.from('.hero__title',{
  x: -10,
  opacity: 0,
  delay: 2.8,
  duration: 1
})
gsap.from('.hero__text',{
  x: 10,
  opacity: 0,
  delay: 2.9,
  duration: 1
})
gsap.from('.hero__img',{
  x: 300,
  opacity: 0,
  delay: 2,
  duration: 1
})

gsap.fromTo('.hero__filter',{
  x: -300,
  opacity: 0,
  delay: 2.5,
  duration: 3
}, {
  x: 0,
  opacity:1,
  zIndex: 1,
  delay: 2.5,
  duration: 1.5
})

gsap.from('.hero__deco',{
  y: -300,
  opacity: 0,
  delay: 2,
  duration: 1
})
