


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

                        <div class="court" id="court">
                            <div class="courtImg">
                                <img src="./assets/img/${foodMenu[indexCategories].menu[indexMenu].menuImg}.jpg" alt="Veggie mushroom black burger">
                            </div>
                            <div class="courtTitle">
                                <h3>${foodMenu[indexCategories].menu[indexMenu].name}</h3>
                                <p>${foodMenu[indexCategories].menu[indexMenu].ingredients}</p>
                            </div>
                            <div class="buttonPrice">
                                <p id="courtPrice" class="courtPrice">${foodMenu[indexCategories].menu[indexMenu].price}€</p>
                                <div class="courtButton">
                                    <button type="button" id="addBasket" class="buttonAddBasket">Add to basket </button>
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



// ======================================================================================





// function foodRender() {
// let refCategories = ' ';
// let indexCategories = ' ';
// // let indexCom = ' ';

// for (let indexCom = 0; indexCom < foodMenu.length; indexCom++) {
//     for (let index = 0; index < foodMenu[indexCom].categories.length; index++) {
//         indexCategories = foodMenu[indexCom].categories.length;

//     if (indexCategories <= 0 ) {
//         return
//     }
//     // refCategories += `<p>Name: ${foodMenu[indexCom].categories[index].name}</p> 
//     // <p>Comment: ${foodMenu[indexCom].categories[index].comment}</p> `;
//     }
//     // document.getElementById('bookKommentare'+[indexCom]).innerHTML = refCategories;
//     console.log(refCategories);
//     refCategories = ' ';
// }
// }
// // vorlage





// // ==============================
// // Fügt eine neue Commits aus den Input-Feldern hinzu
// // ==============================
// function addComment(addIndex) {
//     let inputRefName = document.getElementById('name_input'+ addIndex);
//     let inputRefComment = document.getElementById('comment_input'+ addIndex);
//     if (inputRefName.value != "") {
//       let newComment = {
//             "name": inputRefName.value,
//             "comment": inputRefComment.value
//         };
//         books[addIndex].comments.push(newComment);
//         foodRender();
//     }
//     // Inputfelder leeren
//     inputRefName.value = '';
//     inputRefComment.value = '';
// }

// // ==============================
// // button farbe ändern durch bullen
// // ==============================

// function addLiked(indexBooks) {
//     let buttonColer = ' ';
//     let buttonCondition = books[indexBooks].liked;
//     if (buttonCondition == true) {
//         buttonColer = 'button-green';
//         return buttonColer;
//     }
//     else  {
//         buttonColer = 'button-red';
//         return buttonColer;
//     }
// }

// // neue status in array puschen beim button click
// function addLikedNew(indexBooks) {
//     let  newLikes = ' ';
//     let buttonConditionNew = books[indexBooks].liked;
//     let buttonNewAdd = books[indexBooks].likes;

//     if (buttonConditionNew == true ) {
//         newLikes = buttonNewAdd + 1;
//         books[indexBooks].likes = newLikes;
//         // console.log(books[indexBooks].likes);
//         allRender()
//         return 
//     }
//     else  {
//         newLikes = buttonNewAdd - 1;
//         books[indexBooks].likes = newLikes;
//         // console.log(books[indexBooks].likes);
//         allRender()
//         return 
//     }  
// }