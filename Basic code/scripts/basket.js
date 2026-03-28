// Basket close/open
document.addEventListener('DOMContentLoaded', () => {
    let closeButton = document.getElementById('basketClose');
    let buttonOpen = document.querySelectorAll('.basketOpen');
    for (let index = 0; index < buttonOpen.length; index++) {
        buttonOpen[index].addEventListener('click', toggleBasket);
    }
    closeButton.addEventListener('click', toggleBasket);
});


function toggleBasket() {
    let basket = document.getElementById('BasketTemplaceID');
    basket.classList.toggle('open');
}


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
    if (basket.length === 0) {
        document.getElementById("basketBackgroundID").classList.remove("off");
        document.getElementById("basketFood").classList.add("off");
        document.getElementById("basketOrdersID").classList.add("off");
        document.getElementById('basketFood').innerHTML = '';
        document.querySelector('.basketNavBarNumber').classList.add("off");    
    }
    else { 
        for (let basketMenuIndex = 0; basketMenuIndex < basket.length; basketMenuIndex++) {
        refBasketMenu += TemplateBasketMenu(basketMenuIndex);
        };   
        document.getElementById("basketBackgroundID").classList.add("off");
        document.getElementById("basketFood").classList.remove("off");
        document.getElementById("basketOrdersID").classList.remove("off");
        document.getElementById('basketFood').innerHTML = refBasketMenu;
        document.querySelector('.basketNavBarNumber').classList.remove("off");  
    }
    calTotal();
    basketMenuCounter();
};


function TemplateBasketMenu(basketMenuIndex) {
    let menuNumberCal = basket[basketMenuIndex].number;
    let newBasketMenuPrice = basket[basketMenuIndex].basketMenuPrice.replace(',','.');
    let returnForCategories = basket[basketMenuIndex].indexCategoriesID;
    let returnForMenu = basket[basketMenuIndex].indexMenuID;
    let calculationPrice = newBasketMenuPrice * menuNumberCal;
    calculationPrice = calculationPrice.toFixed(2).replace('.',',');
    return TemplateBasket (basketMenuIndex,returnForCategories,returnForMenu,calculationPrice);
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


function basketMenuCounter() {
    let basketCounterRef = 0;
    for (let index = 0; index < basket.length; index++) {
        let basketCounterNumber = basket[index].number;
        basketCounterRef += basketCounterNumber;
    }
    document.getElementById('basketNavBarNumberID').innerText = basketCounterRef;
};