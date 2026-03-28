function categoriesMenuTemplate(indexCategories, indexMenu) {
    return `
        <div class="foodMenu">
            <div class="court">
                <div class="courtImg">
                    <img src="./assets/img/${foodMenu[indexCategories].menu[indexMenu].menuImg}.jpg" alt="Veggie mushroom black burger">
                </div>
                <div class="foodInfo">
                    <div class="courtTitle">
                        <h3>${foodMenu[indexCategories].menu[indexMenu].name}</h3>
                        <p>${foodMenu[indexCategories].menu[indexMenu].ingredients}</p>
                    </div>
                    <div class="buttonPrice">
                        <p class="courtPrice">${foodMenu[indexCategories].menu[indexMenu].price}€</p>
                        <div class="courtButton">
                            <button 
                                type="button"
                                onclick="addBasket(${indexCategories}, ${indexMenu}, this)"
                                id="addBasketID${indexCategories}-${indexMenu}"
                                class="buttonAddBasket">
                                Add to basket
                            </button>
                        </div>
                    </div>
                </div>
            </div>       
        </div>`;
};


function categoriesTemp(indexCategories, menuRef) {
    return `
        <section class="sectionCourt">
            <header class="sectionHeader">
                <div class="sectionHeaderInner">
                    <div class="sectionTitle">
                        <div class="sectionCourtLogo">
                            <img src="./assets/icons/${foodMenu[indexCategories].categoriesImg}.png" alt="burger">
                        </div>
                        <h2>${foodMenu[indexCategories].categories}</h2>
                    </div>
                </div>
            </header>
            <div class="sectionContentInner">
                ${menuRef}
            </div>
        </section>`;
};


function TemplateBasket (basketMenuIndex,returnForCategories,returnForMenu,calculationPrice) {
     return`
        <section class="basketMenu">
            <header class="basketFoodName">
                <a href="#addBasketID${returnForCategories}-${returnForMenu}">
                    <p><span id="basketMenuNumber${basketMenuIndex}">${basket[basketMenuIndex].number}</span> x ${basket[basketMenuIndex].basketMenuName}</p>
                </a>
                
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