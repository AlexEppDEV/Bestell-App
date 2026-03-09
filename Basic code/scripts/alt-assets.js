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



let saveMenu = '';

function addBasket(indexCategories, indexMenu, button) {
    document.getElementById("BasketTemplaceID").classList.add("open");
    let off = document.getElementById("basketBackgroundID");
    console.log(off);

    if (off) {
        off.classList.add("off");  
    } 
    let basketMenuName = foodMenu[indexCategories].menu[indexMenu].name;
    let basketMenuPrice = foodMenu[indexCategories].menu[indexMenu].price;
    updateBasket(basketMenuName, basketMenuPrice);
};


function updateBasket(basketMenuName, basketMenuPrice) {
    let item = basket.find(item =>
        item.basketMenuName === basketMenuName && item.basketMenuPrice === basketMenuPrice);
    
    if (!item) {
        basket.push({
        basketMenuName: basketMenuName,
        basketMenuPrice: basketMenuPrice,
        number: 1,
        });
        let menuNumber = basket.find(menuNumber => menuNumber.basketMenuName === basketMenuName)?.number;
        let basketMenuIndex = basket.findIndex(basketMenuIndex => basketMenuIndex.basketMenuName === basketMenuName);
        console.log(basketMenuIndex)
        TemplateBasketMenu(basketMenuName, basketMenuPrice, menuNumber, basketMenuIndex);

    }

};


function TemplateBasketMenu(basketMenuName, basketMenuPrice, menuNumber, basketMenuIndex) {
    let refBasketMenu = '';
    refBasketMenu += `
        <section class="basketMenu">
            <header class="basketFoodName">
                <p><span id="basketMenuNumber${basketMenuIndex}">${menuNumber}</span> x ${basketMenuName}</p>
            </header>
            <main class="basketFoodPrice">
                <div class="basketButtonBar">
                    <button type="button" onclick="basketDeleteMenu(${basketMenuIndex}, this)" id="basketMenuDeleteID${basketMenuIndex}"  class="moreMenu">
                         <img src="./assets/icons/trashcan.png" alt="">
                    </button>
                    
                    <button type="button" onclick="basketAddMenu(${basketMenuIndex}, this)" id="basketMenuIndex${basketMenuIndex}"  class="moreMenu">1+</button>
                </div>
                <p ><span id="basketMenuPriceId${basketMenuIndex}">${basketMenuPrice}</span>€</p>
            </main>
        </section>
    `;
    saveMenu += refBasketMenu;

    document.getElementById('basketFood').innerHTML = saveMenu;
    // saveMenu = "";
};





function basketAddMenu (basketMenuIndex) {
    let menuNumberNew = basket[basketMenuIndex].number += 1;
    let basketMenuPriceNew = basket[basketMenuIndex].basketMenuPrice.replace(',','.');
    basketMenuPriceNew = basketMenuPriceNew * menuNumberNew;

    console.log(basket[basketMenuIndex].number)
    document.getElementById('basketMenuNumber'+ basketMenuIndex).innerHTML = menuNumberNew;
    document.getElementById('basketMenuPriceId'+ basketMenuIndex).innerHTML = basketMenuPriceNew.toFixed(2).replace('.',',');

    menuNumberNew = "";
    basketMenuPriceNew = "";

};

function basketDeleteMenu (basketMenuIndex) {
    let menuNumberDelete = basket[basketMenuIndex].number -= 1;
    let basketMenuPriceDelete = basket[basketMenuIndex].basketMenuPrice.replace(',','.');
    basketMenuPriceDelete = basketMenuPriceDelete / menuNumberDelete;

    console.log(basket[basketMenuIndex].number)
    document.getElementById('basketMenuNumber'+ basketMenuIndex).innerHTML = menuNumberDelete;
    document.getElementById('basketMenuPriceId'+ basketMenuIndex).innerHTML = basketMenuPriceDelete.toFixed(2).replace('.',',');

    if (menuNumberDelete <= 0 ) {
        basket.splice(basketMenuIndex);
        console.log(basket);
        
    }

    menuNumberDelete = "";
    basketMenuPriceDelete = "";

};

