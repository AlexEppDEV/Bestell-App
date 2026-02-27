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


// Basket close/open

document.addEventListener('DOMContentLoaded', () => {
    let basketOpen = document.getElementById('testOpen');
    let closeButton = document.getElementById('basketClose');
    let basket = document.getElementById('BasketTemplaceID');

    basketOpen.addEventListener('click', () => {
        basket.classList.toggle('open');
        
    });
    closeButton.addEventListener('click', () => {
        basket.classList.toggle('open');
        
    });
});




