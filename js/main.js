/**
 * NavBar Control start
 * */
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
const collapseNavbar = document.getElementById('collapse-navbar');
const navItem = document.querySelectorAll('.navitem');

window.addEventListener("scroll", function () {
    navbar.classList.toggle('scrolled', window.scrollY >= 70)
});

menu.addEventListener('click', function () {
    collapseNavbar.classList.toggle('open')
});

navItem.forEach(function (item) {
    item.addEventListener('click', function () {
        collapseNavbar.classList.remove('open')
    })
});

/**
 * NavBar Control end
 * */

/**
 * modal control start
 * */

const modalBTN = document.querySelectorAll('.modal-trigger');
modalBTN.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const modal = btn.getAttribute('data-trigger');
        document.getElementById(modal).classList.add('open')
    })
});
/**
 * join modal start
 * */
const joinModal = document.getElementById('join-modal');
joinModal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        joinModal.classList.remove('open')
    }
});
/**
 * join modal end
 * */

/**
 * app modal start
 * */
const appModal = document.getElementById('app-modal');
appModal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        appModal.classList.remove('open')
    }
});
/**
 * app modal end
 * */

/**
 * Board Modal Start
 * */
const boardModal = document.getElementById('our-board');
boardModal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        boardModal.classList.remove('open')
    }
});
/**
 * Board Modal End
 * */

/**
 * Event Modal Start
 * */
const eventModal = document.getElementById('event-modal');
eventModal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        eventModal.classList.remove('open')
    }
});
const eventCTA = document.querySelector('.form-cta');
eventCTA.addEventListener('click', function () {
    eventModal.classList.remove('open')
});
const eventForm = document.getElementById('event-form');
eventForm.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        eventForm.classList.remove('open')
    }
});
/**
 * Event Modal End
 * */

/**
 * modal control end
 * */