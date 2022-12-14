/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swiper-wrapper');
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide');
      }
    });
  }
}
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  // Перечень слайдеров
  if (document.querySelector('.swiper')) {
    new Swiper('.products__slider', {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      speed: 800,
      slidesPerView: 'auto',
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: '.products__pagination',
        clickable: true,
      },
      // Arrows
      navigation: {
        nextEl: '.products__next',
        prevEl: '.products__prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 19,
          // autoHeight: true,
        },
        768: {
          // spaceBetween: 27,
					spaceBetween: 19,
        },
        992: {
          // slidesPerView: 3,
					spaceBetween: 19,
        },
				1280: {
					spaceBetween: 30
				}
      },
      on: {},
    });

    // new Swiper('.gallery__slider', {
    //   modules: [Pagination],
    //   observer: true,
    //   observeParents: true,
    //   spaceBetween: 30,
    //   speed: 800,
    //   slidesPerView: 'auto',
    //   pagination: {
    //     el: '.gallery__pagination',
    //     clickable: true,
    //   },
    //   breakpoints: {
    //     320: {
    //       spaceBetween: 17,
    //     },
    //     768: {
    //       spaceBetween: 24,
    //     },
    //   },
    //   on: {},
    // });

    new Swiper('.testimonials__slider', {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination, Navigation],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      spaceBetween: 20,
      speed: 800,
      slidesPerView: 2,
      // centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: '.testimonials__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
      },
      // Arrows
      breakpoints: {
        320: {
          spaceBetween: 16,
          slidesPerView: 'auto',
        },
				560: {
					slidesPerView: 2,
				},
        880: {
          spaceBetween: 20,
        },
      },
      on: {},
    });

    new Swiper('.news__slider', {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      spaceBetween: 27,
      speed: 800,
			slidesPerView: 2,
      // centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
      },
      pagination: {
        el: '.news__pagination',
        clickable: true,
      },
      // Arrows
      breakpoints: {
        320: {
          spaceBetween: 16,
          slidesPerView: 'auto',
        },
				560: {
					slidesPerView: 2,
				},
        880: {
          spaceBetween: 20,
        },
      },
      on: {},
    });

    new Swiper('.partners__slider', {
      modules: [Pagination],
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 800,
      slidesPerView: 'auto',
      // centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: '.partners__pagination',
        clickable: true,
      },
      // Arrows
      breakpoints: {
        320: {
          spaceBetween: 14,
        },
        630: {
          spaceBetween: 24,
        },
        1280: {
          spaceBetween: 30,
        },
      },
      on: {},
    });

    const thumbs = new Swiper('.thumbnails__slider', {
      // modules: [Pagination],
      observer: true,
      observeParents: true,
      spaceBetween: 22,
      // speed: 800,
      slidesPerView: 4,
      // centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // watchSlidesProgress: true,
      breakpoints: {
        320: {
          spaceBetween: 7,
        },
        630: {
          spaceBetween: 12,
        },
        1280: {
          spaceBetween: 16,
        },
      },
      on: {},
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper('.album__slider', {
      modules: [Thumbs, EffectFade, Navigation],
      observer: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      observeParents: true,
      spaceBetween: 10,
      speed: 800,
      slidesPerView: 1,
      navigation: {
        nextEl: '.album__next',
        prevEl: '.album__prev',
      },
      thumbs: {
        swiper: thumbs,
      },
    });

    new Swiper('.process__slider', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 800,
      slidesPerView: 1,
      navigation: {
        nextEl: '.process__next',
        prevEl: '.process__prev',
      },
      pagination: {
        el: '.process__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        769: {
          slidesPerView: 1,
        },
      },
    });

    new Swiper('.guides__slider', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      speed: 800,
      slidesPerView: 1,
      navigation: {
        nextEl: '.guides__next',
        prevEl: '.guides__prev',
      },
      pagination: {
        el: '.guides__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        769: {
          slidesPerView: 1,
        },
      },
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
