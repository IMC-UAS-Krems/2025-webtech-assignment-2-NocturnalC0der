

// ==================== CONFIG ====================:


// Image dir:
const basePath = './img/'

// Price for

// ==================== ELEMENTS ====================:

// ========== Ingredients ==========

// Number of 
let n_ingredients = 9; // hard coded for now


// Object of objects
// each inner object is one ingredient containing all the id's
const ingredientData = {
  0: {
    'name': 'tuna',
    'price': 6,
    'img_path': 'img/tuna.webp'
  },
  1: {
    'name': 'salmon',
    'price': 7,
    'img_path': 'img/salmon.webp'
  },
  2: {
    'name': 'potato',
    'price': 3,
    'img_path': 'img/potato.jpg'
  },
  3: {
    'name': 'eggs',
    'price': 2,
    'img_path': 'img/eggs.png'
  },
  4: {
    'name': 'sardine',
    'price': 4,
    'img_path': 'img/sardine.jpg'
  },
  5: {
    'name': 'carrot',
    'price': 1.5,
    'img_path': 'img/carrot.jpg'
  },
  6: {
    'name': 'onion',
    'price': 1.3,
    'img_path': 'img/onion.avif'
  },
  7: {
    'name': 'carp',
    'price': 4.5,
    'img_path': 'img/carp.png'
  },
  
  8: {
    'name': 'green peas',
    'price': 4,
    'img_path': 'img/green_peas.jpg'
  },


};

const ingredientCardClasses = ["col-12", "col-sm-12", "col-md-6", "col-lg-4", "card", "card-ingredient"]

const ingredientElements = {

}

// Found this in source 2
// const n = [1, 2, 3, 4, 5];
// const s = n.filter(x => x % 2 === 0).map(x => x ** 2);
// console.log(s);


// Ingredient wrapper:
const ingredientWrapper = document.getElementById('ingredients-wrapper')
// console.log(ingredientWrapper)


function loadIngredients() {

  let row = ''
  for (let i = 0; i < n_ingredients + 1; i++) {
    console.log('Start')
    console.log(i)

    if (i == 0 | i % 3 == 0)  {

      // If i is more than 1, it must be at least 3, so
      // we append the current row
      if (i > 1) {
        console.log(`i is${i}, appending row ${row}`)
        ingredientWrapper.appendChild(row)

      } 

      // Create a new row
      row = document.createElement('div')
      row.classList.add('row')
    }
     
    
    // ---- Ingredient ----

    let templateIngredient = document.createElement('div')

    // Append grid and card classes one-by-one
    for (let j = 0; j < ingredientCardClasses.length; j++) {
      templateIngredient.classList.add(ingredientCardClasses[j])
    }

    // Add id
    templateIngredient.id = `ing${i}`

    // Add content
    templateIngredient.innerHTML =  
    `<img class="card-img-top" src="${ingredientData[i]['img_path']}" alt="Piece of raw ${ingredientData[i]['name']}">
      <div class="card-body">
        <h4 class="card-title">${ingredientData[i]['name']}</h4>
        <div class="card-text">
          <p>${ingredientData[i]['price']} EUR/kg</p>
          <button class="btn btn-success">Order</button>
        </div>
      </div>`

    console.log(`About to append to ${row}`)
    row.appendChild(templateIngredient)

    // ---- Modal ----
    let templateModal = document.createElement('div')

    // ENDED HERE -- RENDERING THE MODALS IN THE LOOP (COPY HTML INTO STRING AND CONTINUE)

  }
}

loadIngredients()



// const templateIngredient = `
// <div class="col-12 col-sm-12 col-md-6 col-lg-4 card card-ingredient" id="">
//             <img class="card-img-top" src="img/tuna.webp" alt="Piece of raw tuna">
//               <div class="card-body">
//                 <h4 class="card-title">Tuna</h4>
//                 <div class="card-text">
//                   <p>6 EUR/kg</p>
//                   <button class="btn btn-success">Order</button>
//                 </div>
//               </div>
//           </div>
// `


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


// ==================== Card slider ====================:

// Get elements
const rangeInput = document.getElementById('q-range1');
const rangeOutput = document.getElementById('range1-value');
const priceLabel = document.getElementById('price1')

// console.log(rangeInput)
// console.log(rangeOutput)

// Initial value 
rangeOutput.innerHTML
 = rangeInput.value;

rangeInput.addEventListener('input', function() {
    rangeOutput.innerHTML = this.value;
    priceLabel.innerHTML = this.value * 6
  });



// ==================== Payment Steps ====================:

function procceedPayment(currentId, nextId) {
  const paySteps = ['cart-step', 'donor-info', 'payment-step', 'thank-you-step']
  // Hide all others
  // document.querySelectorAll('.payment-step').forEach(step => {
  //     console.log(step.classList)
  //       //  step.classList.add('d-none');
  //    });

  console.log(currentId)
  console.log(nextId)

  // console.log(document.querySelectorAll('.payment-step'))

  // HIde the current one:
  currentStep = document.getElementById(currentId)
  console.log('Current')
  console.log(currentStep)
  currentStep.classList.add('d-none')


  // Show the next one: 
  nextStep = document.getElementById(nextId)
  console.log('next')
  console.log(nextStep)
  nextStep.classList.remove('d-none')


}