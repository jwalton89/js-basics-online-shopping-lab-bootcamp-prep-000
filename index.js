var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random()*100 + 1);
 cart.push({ [item]: itemPrice });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // if (!cart.length) {
  //   return "Your shopping cart is empty."}
}

function total() {
  let total = 0;
  for(var i=0; i<cart.length; i++) {
    var price = parseInt(Object.values(cart[i]));
    total += price;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
    cart.length=0;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
