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


// button funktion zum öffnen von warenkorb im gericht

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

}

function TemplateBasketMenu(basketMenuName, basketMenuPrice, menuNumber, basketMenuIndex) {
    let refBasketMenu = '';
    refBasketMenu += `
        <section class="basketMenu">
            <header class="basketFoodName">
                <p> 1 x ${basketMenuName}</p>
            </header>
            <main class="basketFoodPrice">
                <div class="basketButtonBar">
                    <img src="./assets/icons/trashcan.png" alt="">
                    <button type="button" onclick="basketAddMenu(${basketMenuIndex}, this)"  id="basketMenuIndex${basketMenuIndex}" class="moreMenu">${menuNumber}+</button>
                </div>
                <p id="basketMenuPriceId${basketMenuIndex}">${basketMenuPrice}€</p>
            </main>
        </section>
    `;
    saveMenu += refBasketMenu;

    document.getElementById('basketFood').innerHTML = saveMenu;
}

// onclick="basketAddMenu(${basketMenuIndex}, this)"
function updateBasket(basketMenuName, basketMenuPrice) {
    let item = basket.find(item =>
        item.basketMenuName === basketMenuName && item.basketMenuPrice === basketMenuPrice);
    //  console.log(item);
    
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

        console.log(menuNumber);
        console.log(basket);
        // item.number++
    }

}

// die id wird nicht nach reinfolge erstellt
function basketAddMenu (basketMenuIndex) {

    let moreMenu = basket[basketMenuIndex].number;





    console.log(moreMenu)
    // document.getElementById("BasketTemplaceID").classList.add("open");
    // let off = document.getElementById("basketBackgroundID");
    // console.log(off);

    // if (off) {
    //     off.classList.add("off");  
    // } 
    // let basketMenuName = foodMenu[indexCategories].menu[indexMenu].name;
    // let basketMenuPrice = foodMenu[indexCategories].menu[indexMenu].price;
    // updateBasket(basketMenuName, basketMenuPrice);

}



// prüft ob vorhanden
   // quantity++
   // oder neues Objekt