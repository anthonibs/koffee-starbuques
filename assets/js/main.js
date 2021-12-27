const OPEN_MENU = document.querySelectorAll('#btn-mobile');
const MENU_MOBILE = document.querySelector('.menu-mobile');
const OPEN_ANIM_BTN = document.querySelector('.icon');
const OVERLAY_MENU = document.querySelector('.menu-overlay');
const OVERLAY_CLOSED = document.querySelectorAll('.menu-overlay');

// Abrindo e Fechando O MENU MOBILE
for (let i = 0; i < OPEN_MENU.length; i++) {
    OPEN_MENU[i].addEventListener('click', function () {
        OPEN_ANIM_BTN.classList.toggle('open');
        MENU_MOBILE.classList.toggle('menu-open');
        OVERLAY_MENU.classList.toggle('d-block');
    });
}

for (let c = 0; c < OVERLAY_CLOSED.length; c++) {
    OVERLAY_CLOSED[c].addEventListener('click', function () {
        OPEN_ANIM_BTN.classList.toggle('open');
        MENU_MOBILE.classList.toggle('menu-open');
        OVERLAY_MENU.classList.toggle('d-block');
    });
}