// Nav Bar
document.addEventListener('DOMContentLoaded', () => {
    let burger = document.getElementById('burger-bar');
    let nav = document.getElementById('nav-links-id');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');     
        // Optional: Kleine Animation für den Burger-Button selbst
        burger.classList.toggle('open');
    });
});



