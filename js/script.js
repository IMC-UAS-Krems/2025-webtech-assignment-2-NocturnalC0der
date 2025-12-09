

// Image dir:
const basePath = './img/'

// ==================== ELEMENTS ====================:

// ========== Ingredients ==========

// Number of 
let n_ingredients = [];
for (let i = 0; i <= 12; i++) { // currently 12
    n_ingredients.push(i)
}


// Object of object
// each iner object is one ingredient containing all the id's
const ingredients = {};

// Found this in source 2
// const n = [1, 2, 3, 4, 5];
// const s = n.filter(x => x % 2 === 0).map(x => x ** 2);
// console.log(s);


// Ingredient wrapper:
const ingredientWrapper = document.getElementById('ingredients-wrapper')

// let fish = 'Carp'

const templateIngredient = `
<div class="ingredient">
          <img class="img-fluid" src="" alt="">
          <h3></h3>
        </div>
        <div class="ingredient">
          <img class="img-fluid" src="" alt="">
          <div class="ingredient_info_buy">
            <h3 class="ingredient_name"></h3>
            <p class="ingredient_price_per_kg"></p>
            <div class="ingredient_quantity_price">
              <div class="quantity">
                <label for="">
                  Quantity: 
                  <output for="" id=""></output> 
                </label>
                <input 
                    id=""
                    type="range"
                    class="form-range"
                    min="0.5"
                    max = 10
                    step = "0.5"
                  > <!-- This line from bootstrap docs -- source 1  -->
              </div>

              <div class="price">
                <label for="">Price:</label>
                <h4 id="">50</h4>

              </div>

            </div>
            <button class="cart btn btn-success">ADD TO CART</button>
          </div>
        </div>
`


let el = document.createElement('div')
el.innerHTML = templateIngredient

ingredientWrapper.appendChild(el)

// ==================== FUNCTIONALITY ====================:

// console.log(ingredients)

// // const = rangeElements 

// // const ingredient = 

// // Load all the items: 
// function loadIngredients(ingr_el, food_name) {

//     let food_img = basePath + food_name

//     let img_el = document.createElement('img')
//     img_el.src = food_img

//     ingr_el.appendChild(img_el)

//     // console.log('halo')
//     // console.log(ingr_el)

// }

// loadIngredients(ingr_el=ingredients, 'carp.webp')