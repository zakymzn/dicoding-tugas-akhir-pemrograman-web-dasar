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

// Social media icon
const socialMediaIconLight = document.querySelectorAll('.social-media-icon-light');
const socialMediaIconDark = document.querySelectorAll('.social-media-icon-dark');

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
    socialMediaIconLight.forEach(el => el.classList.add('hidden'));
    socialMediaIconDark.forEach(el => el.classList.remove('hidden'));
} else {
    disableDarkMode();
    socialMediaIconDark.forEach(el => el.classList.add('hidden'));
    socialMediaIconLight.forEach(el => el.classList.remove('hidden'));
}

darkToggle.addEventListener('click', () => {
    dark = localStorage.getItem('dark_mode');

    if (dark !== 'enabled') {
        enableDarkMode();
        socialMediaIconLight.forEach(el => el.classList.add('hidden'));
        socialMediaIconDark.forEach(el => el.classList.remove('hidden'));
    } else {
        disableDarkMode();
        socialMediaIconDark.forEach(el => el.classList.add('hidden'));
        socialMediaIconLight.forEach(el => el.classList.remove('hidden'));
    }
});

// Footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');

footer.innerHTML = `&copy; Ma'mur Zaky Nurrokhman ${currentYear}`;