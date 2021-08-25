// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalCell = product.querySelector('.subtotal span');

  const subtotal = price * quantity;
  subtotalCell.innerHTML = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product'); // returns a NodeList which does have forEach
  // const products = document.getElementsByClassName('product'); //returns a HTMLCollection which does not have the forEach method
  console.log(products);

  let total = 0;
  products.forEach((product) => {
    updateSubtotal(product);
    total += Number(product.querySelector('.subtotal span').innerText);
  });

  // for (let i = 0; i < products.length; i++) {
  //   updateSubtotal(products[i]);
  // }

  // ITERATION 3
  //... your code goes here
  const totalPriceText = document.querySelector('#total-value span');
  totalPriceText.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
