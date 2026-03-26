// Nav Bar
document.addEventListener('DOMContentLoaded', () => {
    let burger = document.getElementById('burger-bar');
    let nav = document.getElementById('nav-links-id');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');     
        burger.classList.toggle('open');
    });
});
