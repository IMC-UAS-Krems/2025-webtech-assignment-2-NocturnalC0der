

// Image dir:
const basePath = './img/'

// ==================== ELEMENTS ====================:

// ========== Ingredients ==========

// Number of 
let n_ingredients = 12; // hard coded for now


// Object of objects
// each inner object is one ingredient containing all the id's
const ingredientData = {
  1: {
    'name': 'tuna',
    'price': 6,
    'img_path': 'img/tuna.webp'
  },
  2: {
    'name': 'salmon',
    'price': 7,
    'img_path': 'img/salmon.webp'
  },
  3: {
    'name': 'potato',
    'price': 3,
    'img_path': 'img/potato.webp'
  }
};

const ingredientElements = {

}

// Found this in source 2
// const n = [1, 2, 3, 4, 5];
// const s = n.filter(x => x % 2 === 0).map(x => x ** 2);
// console.log(s);


// Ingredient wrapper:
const ingredientWrapper = document.getElementById('ingredients-wrapper')
console.log(ingredientWrapper)

for (let i = 1; i > 10; i++) {
  console.log(i)
  console.log('dopice')
}


let row = ''
for (let i = 1; i > 10; i++) {
  console.log(`Current ingredient: ${typeof(i)}`)
  console.log(ingredientData)
  console.log(n_ingredients)

  if (i % 3 == 0) {

    if (i > 1) {
      ingredientWrapper.appendChild(row)
    }
    // Create a new row
    row = document.createElement('div')
    row.classList.push('row')


  }

  let templateIngredient = 
  `
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 card card-ingredient" id="${`ing${i}`}">
      <img class="card-img-top" src="img/tuna.webp" alt="Piece of raw tuna">
        <div class="card-body">
          <h4 class="card-title">${ingredientData[i]['name']}</h4>
          <div class="card-text">
            <p>${ingredientData[i]['price']} EUR/kg</p>
            <button class="btn btn-success">Order</button>
          </div>
        </div>
    </div>
  `

  row.appendChild(templateIngredient)

}


const templateIngredient = `
<div class="col-12 col-sm-12 col-md-6 col-lg-4 card card-ingredient" id="">
            <img class="card-img-top" src="img/tuna.webp" alt="Piece of raw tuna">
              <div class="card-body">
                <h4 class="card-title">Tuna</h4>
                <div class="card-text">
                  <p>6 EUR/kg</p>
                  <button class="btn btn-success">Order</button>
                </div>
              </div>
          </div>
`


// let el = document.createElement('div')
// el.innerHTML = templateIngredient

// ingredientWrapper.appendChild(el)

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