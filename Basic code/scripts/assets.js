// ==============================
// Nav Bar
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    let burger = document.getElementById('burger-bar');
    let nav = document.getElementById('nav-links-id');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');     
        burger.classList.toggle('open');
    });
});


// ==============================
// Dialog-Ref (Modal)
// ==============================
let dialogRef = document.getElementById('dialogID');   
let dialog = document.getElementById("dialogID");     


// ==============================
// Open Dialog
// ==============================
function dialogOpen() {
    let dialogRef = document.getElementById('dialogID');
    let basketElement = document.getElementById('BasketTemplaceID');
    dialogRef.showModal();
    dialogRef.classList.add('opened');
    basketElement.classList.remove('open');
    for (let index = 0; index < basket.length; index++) {
        let buttonResetCategories = basket[index].indexCategoriesID;
        let buttonResetMenu = basket[index].indexMenuID;
        let buttonReset = "addBasketID"+ buttonResetCategories + "-" + buttonResetMenu;
        document.getElementById(buttonReset).innerText = "Add to basket"; 
    }
    basket.length = 0;
    localStorage.clear();
    console.log(basket);
    renderBasket();
    setTimeout(() => {
        dialogClose()
    }, 5000);  
};


// ==============================
// Close Dialog
// ==============================
function dialogClose() {
    let dialogRef = document.getElementById('dialogID');
    dialogRef.close();
    dialogRef.classList.remove('opened');
};


// ==============================
// EventListener for Dialog
// ==============================
function setEventListener() {
    let hero = dialog.querySelector(".heroDialog");
    hero.addEventListener("click", function(event) {
        event.stopPropagation();
    });
    dialog.addEventListener("click", function() {
        dialog.close();
    });
};