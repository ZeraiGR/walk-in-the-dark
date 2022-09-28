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

const placementMarkersHandler = () => {
  const closeBtns = document.querySelectorAll('.placement__close'),
    openBtns = document.querySelectorAll('.placement__open');

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const caps = target.closest('.placement__marker').querySelector('.placement__caption');

      caps.classList.add('show');
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const caps = target.closest('.placement__marker').querySelector('.placement__caption');

      caps.classList.remove('show');
    });
  });
};

const citySearchHandler = () => {
  const search = document.getElementById('city-search');
  const cities = document.querySelectorAll('.city__item');
  const arr = [];

  cities?.forEach((el) => {
    let city = el.querySelector('a').textContent.trim();
    arr.push(city);
  });

  if (search && cities.length > 0) {
    search.addEventListener('input', (e) => {
      const request = e.target.value;

      const filteredArr = arr.filter((el) => el.toLowerCase().includes(request.toLowerCase()));

      cities.forEach((el) => {
        let city = el.querySelector('a').textContent.trim();

        if (!filteredArr.includes(city)) {
          el.style.display = 'none';
        } else {
          el.style.display = 'block';
        }
      });
    });
  }
};

const initCalendar = () => {
  // const date = new Date();
  // const month = date.getMonth();
  // const dateMonth = document.querySelector('.date__month');
  // const dateYear = document.querySelector('.date__year');
  // const months = Array.from(document.querySelector('.months').children).map((el) => el.textContent);
  // dateMonth.innerHTML = months[date.getMonth()];
  // dateYear.innerHTML = date.getFullYear();
  // console.log(months);
};

soundBtnsHandler();
subtabsHandler();
placementMarkersHandler();
citySearchHandler();
initCalendar();
