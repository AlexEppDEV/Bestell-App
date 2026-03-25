
// Basket close/open
document.addEventListener('DOMContentLoaded', () => {
    let closeButton = document.getElementById('basketClose');
    let basket = document.getElementById('BasketTemplaceID');
    let buttonOpen = document.querySelectorAll('.basketOpen');
     function toggleBasket() {
        basket.classList.toggle('open');
    }
    for (let index = 0; index < buttonOpen.length; index++) {
        buttonOpen[index].addEventListener('click', toggleBasket); 
    }
    closeButton.addEventListener('click', toggleBasket);
});


function addBasket(indexCategories, indexMenu, button) {
    document.getElementById("BasketTemplaceID").classList.add("open");
    let basketMenuName = foodMenu[indexCategories].menu[indexMenu].name;
    let basketMenuPrice = foodMenu[indexCategories].menu[indexMenu].price;
    updateBasket(basketMenuName, basketMenuPrice,indexCategories, indexMenu);
    changeText(basketMenuName, basketMenuPrice, button);
};


function changeText(basketMenuName, basketMenuPrice, button) {
    let item = basket.find(item =>
        item.basketMenuName === basketMenuName && item.basketMenuPrice === basketMenuPrice);
    if (item.number > 0) { 
        button.innerText = "Added 1";
    } else {
        button.innerText = "Add to basket";
    }
    item = '';
};


function updateBasket(basketMenuName, basketMenuPrice,indexCategories, indexMenu) {
    let item = basket.find(item =>
        item.basketMenuName === basketMenuName && item.basketMenuPrice === basketMenuPrice);   
    if (!item) {
        basket.push({
        basketMenuName: basketMenuName,
        basketMenuPrice: basketMenuPrice,
        number: 1,
        indexCategoriesID: indexCategories,
        indexMenuID: indexMenu,
        });
    }
    else {
        item.number += 1;
        };
        localStorage.setItem('basket', JSON.stringify(basket));
        renderBasket();
};


function renderBasket() {
    let refBasketMenu = '';
    let off = document.getElementById("basketBackgroundID");
    if (basket.length === 0) {
        document.getElementById("basketFood").classList.add("off");
        document.getElementById("basketBackgroundID").classList.remove("off");
        document.getElementById("basketOrdersID").classList.add("off");
        document.getElementById('basketFood').innerHTML = '';    
    }
    else { 
        for (let basketMenuIndex = 0; basketMenuIndex < basket.length; basketMenuIndex++) {
        refBasketMenu += TemplateBasketMenu(basketMenuIndex);
        };   
       document.getElementById("basketBackgroundID").classList.add("off");
       document.getElementById("basketFood").classList.remove("off");
       document.getElementById("basketOrdersID").classList.remove("off");
        document.getElementById('basketFood').innerHTML = refBasketMenu;
    }
    calTotal();
};


function TemplateBasketMenu(basketMenuIndex) {
    let menuNumberCal = basket[basketMenuIndex].number;
    let newBasketMenuPrice = basket[basketMenuIndex].basketMenuPrice.replace(',','.');
     let calculationPrice = newBasketMenuPrice * menuNumberCal;
     calculationPrice = calculationPrice.toFixed(2).replace('.',',');
        return `
        <section class="basketMenu">
            <header class="basketFoodName">
                <p><span id="basketMenuNumber${basketMenuIndex}">${basket[basketMenuIndex].number}</span> x ${basket[basketMenuIndex].basketMenuName}</p>
            </header>
            <section class="basketFoodPrice">
                <div class="basketButtonBar">
                    <button type="button" onclick="basketDeleteMenu(${basketMenuIndex}, this)" id="basketMenuDeleteID${basketMenuIndex}"  class="moreMenu">
                         <img src="./assets/icons/trashcan.png" alt="">
                    </button>               
                    <button type="button" onclick="basketAddMenu(${basketMenuIndex}, this)" id="basketMenuIndex${basketMenuIndex}"  class="moreMenu">1+</button>
                </div>
                <p ><span id="basketMenuPriceId${basketMenuIndex}">${calculationPrice}</span>€</p>
            </section>
        </section>
    `;
};


function basketAddMenu (basketMenuIndex) {
    basket[basketMenuIndex].number += 1;
    localStorage.setItem('basket', JSON.stringify(basket));
    renderBasket();
};


function basketDeleteMenu (basketMenuIndex) {
    let categoryIndex = basket[basketMenuIndex].indexCategoriesID;
    let menuIndex = basket[basketMenuIndex].indexMenuID;
    let button = document.getElementById(`addBasketID${categoryIndex}-${menuIndex}`);
    let menuNumberDelete = basket[basketMenuIndex].number -= 1;
    if (menuNumberDelete <= 0 ) {
        basket.splice(basketMenuIndex,1);
        if (button) {
            button.innerText = "Add to basket";
        }  
    }
     localStorage.setItem('basket', JSON.stringify(basket));
    renderBasket();  
};


function calTotal() {
    let calTotalRef = 0;
    let calTotal = 0;
    let deliveryFeePrice = 4.99;
    for (let index = 0; index < basket.length; index++) {
        let calMenuPrice = basket[index].basketMenuPrice.replace(',','.');
        let calMenuNumber = basket[index].number;
        let calMenuTotal = calMenuPrice * calMenuNumber;
        calTotalRef = calTotalRef + calMenuTotal;
    }
    calTotal = calTotalRef + deliveryFeePrice;
    document.getElementById('SubtotalID').innerText = calTotalRef.toFixed(2).replace('.',',');
    document.getElementById('DeliveryFeeID').innerText = deliveryFeePrice.toFixed(2).replace('.',',');
    document.getElementById('totalID').innerText = calTotal.toFixed(2).replace('.',',');
    document.getElementById('totalButtonID').innerText = calTotal.toFixed(2).replace('.',',');
};


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