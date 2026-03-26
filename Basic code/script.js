
function init() {
    renderCategories();
    loadLocalStorage ();
    renderBasket();     
};


function renderCategories() {
    categoriesTepmlate();
};


function loadLocalStorage () {
    let saveData = localStorage.getItem('basket');
    if (saveData) {
        basket = JSON.parse(saveData);
        for (let indexLS = 0; indexLS < basket.length; indexLS++) {
            let categoryIndex = basket[indexLS].indexCategoriesID;
            let menuIndex = basket[indexLS].indexMenuID;
            let button = document.getElementById(`addBasketID${categoryIndex}-${menuIndex}`);
            button.innerText = "Added 1";
        }
    }
};


// ======================================================================================
function categoriesTepmlate() {
    let categoriesRef = '';
    for (let indexCategories = 0; indexCategories < foodMenu.length; indexCategories++) {
        let menuRef = '';
        for (let indexMenu = 0; indexMenu < foodMenu[indexCategories].menu.length; indexMenu++) {
            menuRef += `
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
        }
        categoriesRef += `
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
    }
    document.getElementById('contentWrapperID').innerHTML = categoriesRef;
}
// ======================================================================================