


function init() {
    // categoriesTepmlate();
    categoriesTepmlate();
}





// ======================================================================================

function categoriesTepmlate(){
    let categoriesRef = ' ';
    let menuRef = ' ';
        for (let indexCategories = 0; indexCategories < foodMenu.length; indexCategories++) {
        categoriesRef+= `<section class="sectionCourt">
                <header class="sectionHeader">
                    <div class="sectionTitle">
                        <div class="sectionCourtLogo">
                            <img src="./assets/icons/${foodMenu[indexCategories].categoriesImg}.png" alt="burger" >
                        </div>
                        <h2>${foodMenu[indexCategories].categories}</h2>
                    </div>
                </header>
                <div id="newMenu${indexCategories}">
                    </div>
                </section>`;

            for (let indexMenu = 0; indexMenu < foodMenu[indexCategories].menu.length; indexMenu++) {
                menuRef+= `
                <div class="BurgerSandwiches">
                    <div class="newMenu">

                        <div class="court">
                            <div class="courtImg">
                                <img src="./assets/img/${foodMenu[indexCategories].menu[indexMenu].menuImg}.jpg" alt="Veggie mushroom black burger">
                            </div>
                            <div class="courtTitle">
                                <h3>${foodMenu[indexCategories].menu[indexMenu].name}</h3>
                                <p>${foodMenu[indexCategories].menu[indexMenu].ingredients}</p>
                            </div>
                            <div class="buttonPrice">
                                <p class="courtPrice">${foodMenu[indexCategories].menu[indexMenu].price}€</p>
                                <div class="courtButton">
                                    <button type="button" onclick="addBasket(${indexCategories}, ${indexMenu}, this)" class="buttonAddBasket">Add to basket</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
            categoriesRef+= menuRef;
            menuRef = ' ';
         }
         document.getElementById('newCategories').innerHTML = categoriesRef;
}


// <button type="button" onclick=" addBasket(${indexMenu})" class="${addLiked(indexMenu)}"></button>
// ======================================================================================
