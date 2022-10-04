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
  let date = new Date();
  let isChanged = false;
  let currentDay = 0;
  let currentMonth = '';
  let currentYear = '';

  // html elems
  const daysWrapper = document.querySelector('.calendar__days');
  const todayBtn = document.querySelector('#today');
  const resetBtn = document.querySelector('#clear');
  const dateMonth = document.querySelector('.date__month');
  const dateYear = document.querySelector('.date__year');
  const nextMonthBtn = document.querySelector('.calendar__btn--next');
  const prevMonthBtn = document.querySelector('.calendar__btn--prev');
  const months = Array.from(document.querySelector('.calendar__months').children).map(
    (el) => el.textContent,
  );

  const renderCalendar = () => {
    date.setDate(1);

    let days = '';
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const firstDayIndex = date.getDay();
    const nextDays = 7 - lastDayIndex - 1;

    dateMonth.innerHTML = months[date.getMonth()];
    dateYear.innerHTML = date.getFullYear();

    for (let x = firstDayIndex - 1; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        isChanged &&
        i === currentDay &&
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      ) {
        days += `<div class="day today">${i}</div>`;
      } else if (
        !isChanged &&
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      ) {
        days += `<div class="day today">${i}</div>`;
      } else if (
        (i < new Date().getDate() && date.getMonth() === new Date().getMonth()) ||
        (date.getMonth() < new Date().getMonth() &&
          date.getFullYear() === new Date().getFullYear()) ||
        date.getFullYear() < new Date().getFullYear()
      ) {
        days += `<div class="prev-date">${i}</div>`;
      } else {
        days += `<div class="day">${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays + 1; j++) {
      days += `<div class="next-date">${j}</div>`;
    }

    daysWrapper.innerHTML = days;
  };

  daysWrapper.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('day')) {
      isChanged = true;

      const days = document.querySelectorAll('.day');
      days.forEach((el) => el.classList.remove('today'));
      target.classList.add('today');

      currentDay = parseInt(target.textContent);
      currentMonth = parseInt(months.indexOf(dateMonth.textContent));
      currentYear = parseInt(dateYear.textContent);
    }
  });

  prevMonthBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  todayBtn.addEventListener('click', () => {
    isChanged = false;

    date.setMonth(new Date().getMonth());
    date.setFullYear(new Date().getFullYear());
    date.setDate(new Date().getDate());
    renderCalendar();
  });

  resetBtn.addEventListener('click', () => {
    isChanged = false;

    date.setMonth(new Date().getMonth());
    date.setFullYear(new Date().getFullYear());
    date.setDate(new Date().getDate());
    renderCalendar();
  });

  renderCalendar();
};

soundBtnsHandler();
subtabsHandler();
placementMarkersHandler();
citySearchHandler();
initCalendar();
