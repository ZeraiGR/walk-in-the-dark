// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

export function headerFixed() {
  const header = document.querySelector('.header'),
    windowHeight = document.documentElement.clientHeight,
    arrowTopBtn = document.querySelector('.arrow-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > windowHeight) {
      header.classList.add('fixed');
      arrowTopBtn.classList.add('active');
    } else {
      header.classList.remove('fixed');
      arrowTopBtn.classList.remove('active');
    }
  });
}

const soundBtnsHandler = () => {
  const soundBtns = document.querySelectorAll('.sound-button');

  soundBtns?.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });
};

soundBtnsHandler();

const subtabsHandler = () => {
  const btns = document.querySelectorAll('.subtabs__btn');

  btns?.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const subtabs = target.closest('.subtabs');
      const menu = subtabs.querySelectorAll('.subtabs__btn');
      const content = subtabs.querySelectorAll('.subtabs__one');
      const idx = Array.from(menu).indexOf(target);

      menu.forEach((btn) => {
        btn.classList.remove('active');
      });

      content.forEach((btn) => {
        btn.classList.remove('active');
      });

      content[idx].classList.add('active');
      target.classList.add('active');
    });
  });
};

subtabsHandler();
