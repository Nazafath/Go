// select elements
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

// toggle menu
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// hide menu on click outside
document.addEventListener('click', (event) => {
    const target = event.target;
    const isMenuOpen = navbarMenu.classList.contains('active');
    const clickedInsideMenu = navbarMenu.contains(target);
    const clickedOnToggle = menuToggle.contains(target);

    if (isMenuOpen && !clickedInsideMenu && !clickedOnToggle) {
        navbarMenu.classList.remove('active');
    }
});
const btnToggle = document.querySelector('.btn_toggle');
const navList = document.querySelector('.nav_list');

btnToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

