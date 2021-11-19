    const mainBlock = document.querySelector('.header__menu'),
        svgImg = mainBlock.querySelector('.header__svg'),
        menuMain = document.querySelector('.menu_main'),
        bodyBack = document.querySelector('.body__back'),
        menuClose = document.querySelector('.menu__close');
    mainBlock.addEventListener('click', function() {
        let expanded = mainBlock.getAttribute('aria-expanded') === 'true' || false;
        mainBlock.setAttribute('aria-expanded', !expanded);
        svgImg.classList.toggle('header__svg_rotated');
        menuMain.classList.toggle('menu_opened');
        bodyBack.classList.toggle('body__back_opened');
    });

    menuClose.addEventListener('click', function() {
        let expanded = mainBlock.getAttribute('aria-expanded') === 'true' || false;
        menuMain.classList.toggle('menu_opened');
        bodyBack.classList.toggle('body__back_opened');
        mainBlock.setAttribute('aria-expanded', !expanded);
        svgImg.classList.toggle('header__svg_rotated');
    });