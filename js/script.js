// ==================== CONFIG ====================:
// Image dir:
const basePath = './img/'

// ======================================== Ingredient Loading ========================================

// Number of ingredients we have
let n_ingredients = 12; // hard coded for now
let nSelectedIngredients = 0 
let final_price = 0

// Object of objects
// each inner object is one ingredient containing all the id's
const ingredientData = {
  0: {
    'name': 'Tuna',
    'price_per_kg': 6,
    'img_path': 'img/tuna.webp',
    'modal_target_id': 'tunaModal'
  },
  1: {
    'name': 'Salmon',
    'price_per_kg': 7,
    'img_path': 'img/salmon.webp',
    'modal_target_id': 'salmonaModal'
  },
  2: {
    'name': 'Potato',
    'price_per_kg': 3,
    'img_path': 'img/potato.jpg',
    'modal_target_id': 'potatoModal'
  },
  3: {
    'name': 'Eggs',
    'price_per_kg': 2,
    'img_path': 'img/eggs.png',
    'modal_target_id': 'eggModal'
  },
  4: {
    'name': 'Sardine',
    'price_per_kg': 4,
    'img_path': 'img/sardine.jpg',
    'modal_target_id': 'sardineModal'
  },
  5: {
    'name': 'Carrot',
    'price_per_kg': 1.5,
    'img_path': 'img/carrot.jpg',
    'modal_target_id': 'carrotModal'
  },
  6: {
    'name': 'Onion',
    'price_per_kg': 1.2,
    'img_path': 'img/onion.avif',
    'modal_target_id': 'onionModal'
  },
  7: {
    'name': 'Carp',
    'price_per_kg': 4.5,
    'img_path': 'img/carp.png',
    'modal_target_id': 'carpModal'
  },
  
  8: {
    'name': 'Green Peas',
    'price_per_kg': 4,
    'img_path': 'img/green_peas.jpg',
    'modal_target_id': 'greenpeaModal'
  },
  
  9: {
    'name': 'Garlic',
    'price_per_kg': 2,
    'img_path': 'img/garlic.jpg',
    'modal_target_id': 'garlicModal'
  },

  10: {
    'name': 'Flour',
    'price_per_kg': 3.5,
    'img_path': 'img/flour.webp',
    'modal_target_id': 'flourModal'
  },

  11: {
    'name': 'Yogurt',
    'price_per_kg': 5.3,
    'img_path': 'img/yogurt.png',
    'modal_target_id': 'yogurtModal'
  }

};

// Classes used for the ingredient and modal elements
const ingredientCardClasses = ["col-12", "col-sm-12", "col-md-6", "col-lg-4", "card", "card-ingredient"]
const modalCardClasses = ["modal", "fade"]


// Ingredient wrapper:
const ingredientWrapper = document.getElementById('ingredients-wrapper')
// Modals wrapper:
const modalsWrapper = document.getElementById('modalsWrapper')


// Load all the ingredients:
function loadIngredients() {

  let row = '' // initialise the row variable


  // Go from 0 to ingredients (not to ingredients + 1)
  for (let i = 0; i < n_ingredients + 1; i++) {
    // console.log(`Iteration: ${i}`)

    // Enter this condition when i is 0, 3, 6, or 9
    if (i == 0 | i % 3 == 0 | i == n_ingredients)  {

      // If i is more than 1, it must be at least 3, so
      // we append the current row
      if (i > 1) {
        // console.log(`i is${i}, appending row ${row}`)
        ingredientWrapper.appendChild(row)

        // End if we are at 9
        if (i == n_ingredients) {
          break 
        }
        
      } 

      // In the cases of 0, 3 and 6, we create a new row
      row = document.createElement('div')
      row.classList.add('row')
    }
     
    
    // ---- Ingredient ----
    let templateIngredient = document.createElement('div')
    let currentIngData = ingredientData[i]


    // Append grid and card classes one-by-one
    for (let j = 0; j < ingredientCardClasses.length; j++) {
      templateIngredient.classList.add(ingredientCardClasses[j])
    }

    // Add id
    templateIngredient.id = `ing${i}`

    // Add content
    templateIngredient.innerHTML =  
    `<img class="card-img-top" src="${currentIngData['img_path']}" alt="Piece of raw ${currentIngData['name']}">
      <div class="card-body">
        <h4 class="card-title">${currentIngData['name']}</h4>
        <div class="card-text">
          <p>${currentIngData['price_per_kg']} EUR/kg</p>
          <button 
            class="btn btn-success" 
            data-bs-toggle="modal"
            data-bs-target="#${currentIngData['modal_target_id']}"
            >Order</button>
        </div>
      </div>`


    // Append as a child to the current row.
    row.appendChild(templateIngredient)

    // ---- Modal ----
    let currentModal = document.createElement('div')

    for (let k = 0; k < modalCardClasses.length; k++) {
      currentModal.classList.add(modalCardClasses[k])
    }

    // Set the other attributes:
    currentModal.setAttribute('id', currentIngData['modal_target_id'])
    currentModal.setAttribute('aria-hidden', "true")
    currentModal.setAttribute('tabindex', "-1")


    // Add content
    currentModal.innerHTML = 
    `
     <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${currentIngData['name']}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
            <div class="card-ingredient">
              <img class="card-img-top" src="${currentIngData['img_path']}" alt="ingredient">
                <div class="card-body container-fluid text-center">
                  
                  <!-- Price per kg row -->
                  <div class="row">
                    <div class="col-12 price-per-kg">
                      <p><strong>${currentIngData['price_per_kg']} EUR/kg</strong></p>
                    </div>
                  </div>
                
                <!-- Slider and final price -->
                <div class="row ingredient_quantity_price">
                  <div class="col-6 quantity">
                    <label for="input-range-${i}">
                      Quantity: 
                    <output for="input-range-${i}" id="range-value-${i}" aria-hidden="true">5</output> 
                    <span>kg</span>
                    </label>
                    <input 
                      id="input-range-${i}"
                      type="range"
                      class="form-range"
                      min="0.5"
                      max = 10
                      step = "0.5"
                      value="5"
                    > 
                  </div>

                  <div class="col-6 price">
                    <label for="price-label-${i}">Price:</label>
                    <h4 id="price-label-${i}"></h4>
                    <h6>EUR</h6>
                  </div>
                </div>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="add-to-cart-${i}">Add to cart</button>
          </div>
        </div>
      </div>
    `

    // Add modal to container
    modalsWrapper.appendChild(currentModal)

    
    let rangeInput = document.getElementById(`input-range-${i}`) 
    let rangeOutput = document.getElementById(`range-value-${i}`)
    let priceLabel = document.getElementById(`price-label-${i}`) 
    
    let amount = parseFloat(rangeInput.value)
    let price = Math.round(amount * currentIngData['price_per_kg']);


    // Add event listeners after creating the modal

    // first for setting the quantity:
    rangeInput.addEventListener('input', () => {
      amount = parseFloat(rangeInput.value)
      // price = Math.round(rangeInput.value * currentIngData['price_per_kg']);
      price = parseFloat((amount * currentIngData['price_per_kg']).toFixed(1))

      rangeOutput.textContent = amount
      priceLabel.textContent = price

    })

    // then for adding to cart
    document.getElementById(`add-to-cart-${i}`).addEventListener('click', () => {
      const selected = { ...currentIngData} 
      selected['amount'] = amount
      selected['price'] = price
      selected['order'] = nSelectedIngredients

      // Increase item counter
      nSelectedIngredients += 1

    handleAddToCartClick(selected)
  })


  }
}

loadIngredients()

// =============================================== Cart Functionality =================================================

// Define base object
let cart = []

function addSumCartRow(amount, price) {
  // Produce and return a row with the totals 

  const sumRowElement = document.createElement('tr')
  sumRowElement.innerHTML = 
  `
  <th scope="row">Sum:</th>
  <td></td>
  <td><strong>${amount}</strong></td>
  <td id="price-total">
    <strong>${price}</strong>
  </td>
  <td></td>
  `
  sumRowElement.setAttribute('id', 'total-row"')
  
  return sumRowElement

}

let cartTableElement = document.getElementById('cart-table')

function updateContinueButton() {
  const continueButton = document.getElementById('cart-continue');
  if (cart.length === 0) {
    continueButton.disabled = true;
  } else {
    continueButton.disabled = false;
  }
}

function reloadCart() {
  // Produce table rows based on the objects inside the cart array:

  // 1 clear existing table 
  cartTableElement.innerHTML = ''

  // 2 - calculate new totals
  let total_amount = 0
  let total_price = 0
  // let row_to_append = ''

  for (let l = 0; l < nSelectedIngredients; l++) {
    
    console.log('at element', cart[l])
    const templateRow = document.createElement('tr')
    templateRow.innerHTML = 
    `
      <th scope="row">${l+1}</th>
      <td>${cart[l]['name']}</td>
      <td>${cart[l]['amount']}</td>
      <td>${cart[l]['price']}</td>
      <td>
        <button 
          type="button" 
          class="btn-close"
          onclick="handleRemoveFromCartClick(${l})"
          ></button>
      </td>
    `
    // Update totals
    total_amount = parseFloat((total_amount + cart[l]['amount']).toFixed(1))
    total_price = parseFloat((total_price + cart[l]['price']).toFixed(1))
    
    // add the row
    cartTableElement.appendChild(templateRow)
  }
  
  // At the end, add the totals row
  sumRow = addSumCartRow(total_amount, total_price)
  cartTableElement.appendChild(sumRow)

  final_price = total_price

  // Update continue button state
  updateContinueButton()
}

function handleAddToCartClick(ingredient) {

  // // Add ingredient to cart array at the start
  cart.unshift(ingredient)
  
  // Re-render cart
  reloadCart()
}

function handleRemoveFromCartClick(index) {

  toRemove = cart[index]

  // Source 3 - Filtering out a specific element:
  cart = cart.filter(item => item != toRemove)

  // !Important! - Update item count
  nSelectedIngredients -= 1

  // Re-render cart
  reloadCart()
}

function handleClearCartClick() {
  // Clear all 
  cart = []
  nSelectedIngredients = 0

  // reaload
  reloadCart()
}

function checkDiscount() {
  // Get elements affected by discount
  const discountText = document.getElementById('discount-text')
  const finalPrice1 = document.getElementById('final-price')
  const finalPrice2 = document.getElementById('final-price2')

  // check and update
  if (cart.length > 3) {
    final_price = final_price * 0.9

    discountText.innerHTML = 'Since you ordered above 3 items, you get 10% off!'
  } 

  finalPrice1.textContent = final_price
  finalPrice2.textContent = final_price
}


// ==================== Payment Steps ====================:


// Move back and forth between payment steps:
function procceedPayment(currentId, nextId) {
  const paySteps = ['cart-step', 'donor-info-step', 'payment-step', 'thank-you-step']


  if (currentId == 'cart-step') {
    checkDiscount()
  }

  // HIde the current one:
  currentStep = document.getElementById(currentId)
  console.log('Current')
  console.log(currentId, currentStep)
  currentStep.classList.add('d-none')


  // Show the next one: 
  nextStep = document.getElementById(nextId)
  console.log('next')
  console.log(nextId, nextStep)
  nextStep.classList.remove('d-none')


}

// Initialize continue button state when loading for the firts time
updateContinueButton()

