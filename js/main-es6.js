(function() {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header__active');
    }
    if (window.pageYOffset <= 50) {
      header.classList.remove('header__active');
    }
  };
}());

(function() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');  
  const menuLinks = document.querySelectorAll('.header__link');

  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav__active');
  });

  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav__active');
  });

  if (window.innerWidth < 768) {
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('header__nav__active');
      })
    });
  }

}());

// scroll when clicking on the header menu
(function () {

  // функция прокрутки
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;
    
    const ease = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
    
    const animation = function(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElApsed = currentTime - startTime;
      const run = ease(timeElApsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElApsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  }

// устанавливаем обработчики события на элементы меню с классом js-scroll
  const scrollTo = function() {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
      each.addEventListener('click', () => {
        const currentTarget = each.getAttribute('href');
        // при событии вызываем функцию прокрутки, передаем  id и время прокрутки
        smoothScroll(currentTarget, 1000);
      })
    })
  }
  scrollTo();
}());