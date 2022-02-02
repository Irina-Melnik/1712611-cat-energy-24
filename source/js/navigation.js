    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.header__menu-toggler');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navToggle.classList.remove('header__menu-toggler--line');
        navMain.classList.add('main-nav--opened');
        navToggle.classList.add('header__menu-toggler--cross');
      } else {
        navMain.classList.add('main-nav--closed');
        navToggle.classList.add('header__menu-toggler--line');
        navMain.classList.remove('main-nav--opened');
        navToggle.classList.remove('header__menu-toggler--cross');
      }
    });
