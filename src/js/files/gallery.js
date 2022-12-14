/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.es5.js';
import lgVideo from 'lightgallery/plugins/video/lg-video.es5.js';
// import lgVideo from 'lightgallery';

// Базовые стили
import '@scss/libs/gallery/lightgallery.scss';
// Стили дополнений
import '@scss/libs/gallery/lg-thumbnail.scss';
import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
const galleries = document.querySelectorAll('.video-preview');

if (galleries.length) {
  galleries.forEach((gallery) => {
    gallery.addEventListener('lgBeforeOpen', () => {
      document.documentElement.classList.add('lock');
    });

    gallery.addEventListener('lgAfterClose', () => {
      document.documentElement.classList.remove('lock');
    });

    lightGallery(gallery, {
      plugins: [lgVideo],
      licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
      speed: 500,
    });
  });
}
