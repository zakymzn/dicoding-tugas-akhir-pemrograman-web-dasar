// Hamburger
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#float-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != menu) {
        hamburger.classList.remove('hamburger-active');
        menu.classList.add('hidden');
    }
})

// FLoat menu fixed
window.onscroll = function () {
    const floatMenu = document.querySelector('#float-menu');
    const backToTop = document.querySelector('#back-to-top');
    const fixedFloatMenu = floatMenu.offsetTop;

    if (window.pageYOffset > fixedFloatMenu) {
        floatMenu.classList.add('float-menu-fixed');
        floatMenu.classList.remove('float-menu');
        backToTop.classList.remove('hidden');
    } else {
        floatMenu.classList.remove('float-menu-fixed');
        floatMenu.classList.add('float-menu');
        backToTop.classList.add('hidden');
    }
}

// Dark Mode & Local Storage
const darkMode = document.querySelector('.material-symbols-outlined');

function switchToDarkModeIcon() {
    darkMode.innerHTML = 'dark_mode';
}

function switchToLightModeIcon() {
    darkMode.innerHTML = 'light_mode';
}

const darkToggle = document.querySelector('#darkToggle');
const html = document.querySelector('html');
let dark = localStorage.getItem('dark_mode');

const enableDarkMode = () => {
    html.classList.add('dark');
    switchToDarkModeIcon();
    localStorage.setItem('dark_mode', 'enabled');
}

const disableDarkMode = () => {
    html.classList.remove('dark');
    switchToLightModeIcon();
    localStorage.setItem('dark_mode', null);
}

if (dark === 'enabled') {
    enableDarkMode();
}

darkToggle.addEventListener('click', () => {
    dark = localStorage.getItem('dark_mode');

    if (dark !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})