function init() {
    categoriesTepmlate();
    loadLocalStorage ();
    renderBasket();     
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
        menuRef += categoriesMenuTemplate(indexCategories, indexMenu);
        }
        categoriesRef += categoriesTemp(indexCategories, menuRef);
    }
    document.getElementById('contentWrapperID').innerHTML = categoriesRef;
}
// ======================================================================================
