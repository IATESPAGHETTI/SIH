const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;


menuToggle.addEventListener('click', () => {
    body.classList.toggle('menu-active'); /* Toggle the menu visibility */
});
