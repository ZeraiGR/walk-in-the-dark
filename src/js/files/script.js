// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

import "./../libs/jquery.js";
import "./../libs/jQuery-Marquee.js";

if (document.querySelector('.runline')) {
	$('.runline').marquee({
		duration: 25000,
		startVisible: true,
		duplicated: true,
});
}

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
  const images = document.querySelectorAll('.excursion__one');

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

      images.forEach((img) => {
        img.classList.remove('active');
      });

      images[idx].classList.add('active');
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

export const initCalendar = () => {
  let date = new Date();
  let isChanged = false;
  let currentDay = 0;
  let currentMonth = '';
  let currentYear = '';

  // html elems
	const calendars = document.querySelectorAll('.calendar');

	calendars.forEach(cal => {
		 const daysWrapper = cal.querySelector('.calendar__days');
  const todayBtn = cal.querySelector('#today');
  const resetBtn = cal.querySelector('#clear');
  const dateMonth = cal.querySelector('.date__month');
  const dateYear = cal.querySelector('.date__year');
  const nextMonthBtn = cal.querySelector('.calendar__btn--next');
  const prevMonthBtn = cal.querySelector('.calendar__btn--prev');
  let months = [];

  if (cal.querySelector('.calendar__months')) {
    months = Array.from(cal.querySelector('.calendar__months').children).map(
      (el) => el.textContent,
    );
  }

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

		if (daysWrapper) {
			daysWrapper.addEventListener('click', (e) => {
				const target = e.target;

				if (target.classList.contains('day')) {
					isChanged = true;

					const days = cal.querySelectorAll('.day');
					days.forEach((el) => el.classList.remove('today'));
					target.classList.add('today');

					currentDay = parseInt(target.textContent);
					currentMonth = parseInt(months.indexOf(dateMonth.textContent));
					currentYear = parseInt(dateYear.textContent);
				}
			});
		}

		if (prevMonthBtn) {
			prevMonthBtn.addEventListener('click', () => {
				date.setMonth(date.getMonth() - 1);
				renderCalendar();
			});
		}

		if (nextMonthBtn) {
			nextMonthBtn.addEventListener('click', () => {
				date.setMonth(date.getMonth() + 1);
				renderCalendar();
			});
		}

		if (todayBtn) {
			todayBtn.addEventListener('click', () => {
				isChanged = false;

				date.setMonth(new Date().getMonth());
				date.setFullYear(new Date().getFullYear());
				date.setDate(new Date().getDate());
				renderCalendar();
			});
		}

		if (resetBtn) {
			resetBtn.addEventListener('click', () => {
				isChanged = false;

				date.setMonth(new Date().getMonth());
				date.setFullYear(new Date().getFullYear());
				date.setDate(new Date().getDate());
				renderCalendar();
			});
		}

		if (daysWrapper) {
			renderCalendar();
		}
		});
};

const initBooking = () => {
  const toursBox = document.querySelectorAll('.timing__hours');
  const start = document.querySelector('.booking__start');
  const finish = document.querySelector('.booking__finish');
  const backlink = document.querySelector('.booking__backlink');

  if (toursBox && backlink) {
    toursBox.forEach((box) => {
      box.addEventListener('click', (e) => {
        const target = e.target.closest('.timing__hour');

        if (target) {
          finish.classList.add('show');
          start.classList.add('hide');
        }
      });
    });

    backlink.addEventListener('click', () => {
      finish.classList.remove('show');
      start.classList.remove('hide');
    });
  }
};

soundBtnsHandler();
subtabsHandler();
placementMarkersHandler();
citySearchHandler();
initCalendar();
initBooking();

document.addEventListener("afterPopupOpen", function (e) {
	initCalendar();
});
