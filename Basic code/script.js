


function init() {
    let indexCategories = ' ';
    allRender(indexCategories);
}

function allRender(indexCategories) {
    // 1. Wir holen uns die Referenz zum HTML-Element
    foodTepmlate(indexCategories);
    // foodRender();
}
function foodRender() {
let refCategories = ' ';
let indexCategories = ' ';
// let indexCom = ' ';

for (let indexCom = 0; indexCom < foodMenu.length; indexCom++) {
    for (let index = 0; index < foodMenu[indexCom].categories.length; index++) {
        indexCategories = foodMenu[indexCom].categories.length;

    if (indexCategories <= 0 ) {
        return
    }
    // refCategories += `<p>Name: ${foodMenu[indexCom].categories[index].name}</p> 
    // <p>Comment: ${foodMenu[indexCom].categories[index].comment}</p> `;
    }
    // document.getElementById('bookKommentare'+[indexCom]).innerHTML = refCategories;
    console.log(refCategories);
    refCategories = ' ';
}
}

function foodTepmlate(indexCategories){
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
          <div id="newMenu">

            </div>
        </section>`;
       document.getElementById('newCategories').innerHTML = categoriesRef;
    


    //    console.log(foodMenu[indexCategories].menu[0].menuImg);


       

for (let indexMenu = 0; indexMenu < foodMenu[indexCategories].menu.length; indexMenu++) {
  menuRef+= `
          <div class="BurgerSandwiches">
            <div class="court" id="court">
                <div class="courtImg">
                    <img src="./assets/img/${foodMenu[indexCategories].menu[indexMenu].menuImg}.jpg" alt="Veggie mushroom black burger">
                </div>
                <div class="courtTitle">
                    <h3>Veggie mushroom black burger</h3>
                    <p>Mixed green salad, Tomatoes, Edamame, Mushrooms</p>

                </div>
                <div class="buttonPrice">
                    <p id="courtPrice" class="courtPrice"> 13,90€</p>
                    <div class="courtButton">
                        <button id="addBasket" class="buttenAddBasket">Add to basket </button>
                    </div>

                </div>

            </div>
          </div>

        </section>`;
       document.getElementById('newMenu').innerHTML = menuRef;
    


    //    console.log(foodMenu[indexMenu].menu[0].menuImg);
}


}

}


// ======================================================================================
// vorlage

function foodRender1() {
let commentRef = ' ';
let indexComments = ' ';
// let indexCom = ' ';

for (let indexCom = 0; indexCom < books.length; indexCom++) {
    for (let index = 0; index < books[indexCom].comments.length; index++) {
        indexComments = books[indexCom].comments.length;

    if (indexComments <= 0 ) {
        return
    }
    commentRef += `<p>Name: ${books[indexCom].comments[index].name}</p> 
    <p>Comment: ${books[indexCom].comments[index].comment}</p> `;
    }
    document.getElementById('bookKommentare'+[indexCom]).innerHTML = commentRef;
    // console.log(commentRef);
    commentRef = ' ';
}
}

function foodTepmlate1(indexBooks){
  let bookRef = ' ';
for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
  bookRef+= `<article class="book">
        <header>
            <div class="bookImage"></div>
            <h2> ${books[indexBooks].name}</h2>
        </header> 
        <section class="bookHero">
            <div class="bookTitelblatt">
                <div class="priceBar">
                    <p>Preis: ${books[indexBooks].price}</p> 
                    <p>likes: ${books[indexBooks].likes}</p>
                    <button onclick="addLikedNew(${indexBooks})" class="${addLiked(indexBooks)}"  >herz</button>
                </div>
                 <p>Author: ${books[indexBooks].author}</p>
                 <p>Published Year: ${books[indexBooks].publishedYear}</p>
                 <p>Genre: ${books[indexBooks].genre}</p>
            </div>
            <div class="bookKommentare">
                <h3>Kommentare</h3>
                <label for="name_input${indexBooks}">Name Add:</label>
                <input id="name_input${indexBooks}" required>       
                <label for="comment_input${indexBooks}">Notes Add:</label>
                <input id="comment_input${indexBooks}"  required>
                <button onclick="addComment(${indexBooks})">add Comment</button>
                <div id="bookKommentare${indexBooks}" class="comment">Kommentare</div>
            </div>
        </section>
       </article>`;
       document.getElementById('bookNew').innerHTML = bookRef;
}
}

// ==============================
// Fügt eine neue Commits aus den Input-Feldern hinzu
// ==============================
function addComment(addIndex) {
    let inputRefName = document.getElementById('name_input'+ addIndex);
    let inputRefComment = document.getElementById('comment_input'+ addIndex);
    if (inputRefName.value != "") {
      let newComment = {
            "name": inputRefName.value,
            "comment": inputRefComment.value
        };
        books[addIndex].comments.push(newComment);
        foodRender();
    }
    // Inputfelder leeren
    inputRefName.value = '';
    inputRefComment.value = '';
}

// ==============================
// button farbe ändern durch bullen
// ==============================

function addLiked(indexBooks) {
    let buttonColer = ' ';
    let buttonCondition = books[indexBooks].liked;
    if (buttonCondition == true) {
        buttonColer = 'button-green';
        return buttonColer;
    }
    else  {
        buttonColer = 'button-red';
        return buttonColer;
    }
}

// neue status in array puschen beim button click
function addLikedNew(indexBooks) {
    let  newLikes = ' ';
    let buttonConditionNew = books[indexBooks].liked;
    let buttonNewAdd = books[indexBooks].likes;

    if (buttonConditionNew == true ) {
        newLikes = buttonNewAdd + 1;
        books[indexBooks].likes = newLikes;
        // console.log(books[indexBooks].likes);
        allRender()
        return 
    }
    else  {
        newLikes = buttonNewAdd - 1;
        books[indexBooks].likes = newLikes;
        // console.log(books[indexBooks].likes);
        allRender()
        return 
    }  
}