function calculatePercentageDiscount(originalPrice, discountedPrice) {
  if (originalPrice === 0) {
    return 0;
  }
  let discount = originalPrice - discountedPrice;
  let percentageDiscount = (discount / originalPrice) * 100;
  return percentageDiscount;
}

var contener = document.createElement("section");
contener.style.display = "inline-block";
contener.style.margin = "0 35px";
//contener.style.width = "95%";
// contener.style.marginBlock = "10px";
// contener.style.marginInline = "60px";
// contener.style.paddingInline = "25px";
// contener.style.backgroundColor = "lightgray"
// contener.style.backgroundColor = "#fbd290"
// contener.style.position="flex"
var cont = 0;
// Array to hold all product objects
let products = [];

function createProductCard(_name, _price, _img, _desc, _sale_price, code) {
  // Object to represent the current product
  var product = {
    name: _name,
    price: _price,
    salePrice: _sale_price,
    quantity: code,
    getSubtotal: function () {
      return this.salePrice * this.quantity;
    },
  };
  products.push(product);

  var card = document.createElement("div");
  card.className = "card";
  card.style.display = "inline-block";
  card.style.marginInline = "15px";
  card.style.paddingInline = "10px";
  card.style.marginBlock = "15px";
  card.style.height = "max-content";
  card.style.width = "250px";
  card.style.border = "1px solid gray";
  card.style.borderRadius = "15px";
  card.style.position = "relative"; // Add relative positioning to card for the delete button

  // Create the delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.style.position = "absolute";
  deleteButton.style.top = "5px";
  deleteButton.style.left = "5px";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "white";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = "50%";
  deleteButton.style.width = "90px";
  deleteButton.style.height = "30px";
  deleteButton.style.cursor = "pointer";
  deleteButton.style.marginBottom = "15px";
  deleteButton.onclick = function () {
    card.remove();
    products = products.filter((p) => p !== product);
    updateTotals();
  };
  card.appendChild(deleteButton);

  // Create the product image
  var productImage = document.createElement("img");
  productImage.src = `${_img}`;
  productImage.style.width = "70%";
  productImage.style.height = "250px";
  productImage.style.marginInline = "40px";
  productImage.style.mixBlendMode = "multiply";
  productImage.className = "product-image";
  productImage.style.marginTop = "25px";
  card.appendChild(productImage);

  // Create the product title
  var productTitle = document.createElement("h2");
  productTitle.className = "product-title";
  productTitle.style.textAlign = "center";
  productTitle.textContent = `${_name}`;
  card.appendChild(productTitle);

  // Create the rating div
  var rating = document.createElement("div");
  rating.className = "rating";
  rating.style.maxHeight = "55px";
  rating.style.overflow = "hidden";
  var ratingText = document.createElement("span");
  ratingText.className = "rating-text";
  ratingText.textContent = _desc;
  ratingText.style.fontFamily = "Arial, Helvetica, sans-serif";
  ratingText.style.fontSize = "17px";
  rating.appendChild(ratingText);
  card.appendChild(rating);

  // Create the price paragraph
  var price = document.createElement("p");
  price.className = "price";
  price.innerHTML += `${_sale_price} $ <br>`;

  var oldPrice = document.createElement("p");
  oldPrice.className = "old-price";
  oldPrice.innerHTML = `<del>${_price} $</del> &nbsp;&nbsp;`;
  oldPrice.style.color = "gray";
  oldPrice.style.display = "inline-block";
  price.appendChild(oldPrice);

  var discount = document.createElement("span");
  discount.className = "discount";
  discount.style.color = "#FF3700";
  var disc = calculatePercentageDiscount(_price, _sale_price);
  discount.textContent = `-${Number(disc.toFixed(2))}%`;
  price.style.fontSize = "25px";
  price.appendChild(discount);
  card.appendChild(price);

  var numprod = document.createElement("p");
  numprod.innerHTML = `${code} Piece`;
  numprod.style.textAlign = "center";
  numprod.style.fontWeight = "bold";
  numprod.style.color = "#FF3700";
  card.appendChild(numprod);

  // Create container for quantity buttons
  var quantityContainer = document.createElement("div");
  quantityContainer.style.display = "flex";
  quantityContainer.style.justifyContent = "center";
  quantityContainer.style.alignItems = "center";
  quantityContainer.style.margin = "10px 0";

  // Create "-" button to decrease quantity
  var decreaseButton = document.createElement("button");
  decreaseButton.textContent = "-";
  decreaseButton.style.fontSize = "20px";
  decreaseButton.style.marginRight = "10px";
  decreaseButton.onclick = function () {
    if (product.quantity > 1) {
      product.quantity--;
      numprod.innerHTML = `${product.quantity} Piece`;
      updateTotals();
    }
  };
  quantityContainer.appendChild(decreaseButton);

  // Create "+" button to increase quantity
  var increaseButton = document.createElement("button");
  increaseButton.textContent = "+";
  increaseButton.style.fontSize = "20px";
  increaseButton.style.marginLeft = "10px";
  increaseButton.style.width = "60px";
  increaseButton.onclick = function () {
    product.quantity++;
    numprod.innerHTML = `${product.quantity} Piece`;
    updateTotals();
  };
  quantityContainer.appendChild(increaseButton);

  card.appendChild(quantityContainer);

  // Create and append the subtotal paragraph for this product
  var subtotalElement = document.createElement("p");
  subtotalElement.className = "subtotal";
  subtotalElement.style.textAlign = "center";
  subtotalElement.style.fontWeight = "bold";
  subtotalElement.style.color = "#FF3700";
  subtotalElement.innerHTML = `Subtotal: ${product.getSubtotal().toFixed(2)} $`;
  card.appendChild(subtotalElement);

  // Append the card to the container
  contener.appendChild(card);

  // Update subtotal whenever quantity changes
  function updateTotals() {
    subtotalElement.innerHTML = `Subtotal: ${product
      .getSubtotal()
      .toFixed(2)} $`;
    calculateTotalPrice();
  }

  calculateTotalPrice(); // Calculate the total price after adding a new card
}

function calculateTotalPrice() {
  let total = products.reduce((sum, product) => sum + product.getSubtotal(), 0);
  document.getElementById(
    "totalPrice"
  ).innerText = `Total Price: ${total.toFixed(2)} $`;
}

function calculatePercentageDiscount(originalPrice, salePrice) {
  return ((originalPrice - salePrice) / originalPrice) * 100;
}

// Assuming there is an aside element with id="totalPriceAside" in the HTML
var asideElement = document.createElement("aside");
asideElement.id = "totalPriceAside";
asideElement.style.backgroundColor = "orange";
asideElement.style.padding = "15px";
asideElement.style.marginTop = "20px";
asideElement.style.color = "white";
asideElement.style.fontSize = "20px";
asideElement.style.fontWeight = "bold";
asideElement.innerHTML = `<p id="totalPrice">Total Price: 0.00 $</p>`;

// Create the "Place Order" button
var asideElement = document.createElement("aside");
asideElement.id = "totalPriceAside";
asideElement.style.backgroundColor = "orange";
asideElement.style.padding = "15px";
asideElement.style.marginTop = "20px";
asideElement.style.color = "white";
asideElement.style.fontSize = "20px";
asideElement.style.fontWeight = "bold";
asideElement.style.height = "100vh"; // Full viewport height
asideElement.style.display = "flex";
asideElement.style.flexDirection = "column";
asideElement.style.justifyContent = "space-between"; // Pushes the button to the bottom
asideElement.innerHTML = `<p id="totalPrice">Total Price: 0.00 $</p>`;

// Create the "Place Order" button
var asideElement = document.createElement("aside");
asideElement.id = "totalPriceAside";
asideElement.style.backgroundColor = "orange";
asideElement.style.padding = "15px";
asideElement.style.marginTop = "20px";
asideElement.style.color = "white";
asideElement.style.fontSize = "20px";
asideElement.style.fontWeight = "bold";
// asideElement.style.height = "100vh"; // Full viewport height
asideElement.style.position = "relative"; // Set relative position to place the button absolutely
asideElement.innerHTML = `<p id="totalPrice">Total Price: 0.00 $</p>`;

// Create the "Place Order" button
var placeOrderButton = document.createElement("button");
placeOrderButton.textContent = "Place Order";
placeOrderButton.style.position = "absolute";
placeOrderButton.style.bottom = "15px";
placeOrderButton.style.right = "15px";
placeOrderButton.style.padding = "10px 20px";
placeOrderButton.style.backgroundColor = "green";
placeOrderButton.style.color = "white";
placeOrderButton.style.border = "none";
placeOrderButton.style.borderRadius = "5px";
placeOrderButton.style.cursor = "pointer";

// Add an event listener to navigate to the gateway screen
placeOrderButton.addEventListener("click", function () {
  window.location.href = "../HTML/gateway.html"; // Replace with the actual URL of the gateway screen
});

// Append the button to the aside element at the bottom right corner
asideElement.appendChild(placeOrderButton);

document.body.appendChild(asideElement);

function calculatePercentageDiscount(originalPrice, salePrice) {
  return ((originalPrice - salePrice) / originalPrice) * 100;
}

document.body.appendChild(contener);
var currentUser = sessionStorage.getItem("currentUser");

const array = JSON.parse(localStorage.getItem("prodectarr"));
for (var i = 0; i < array.length; i++) {
  if (array[i]["count_of_prodct"] > 0 && array[i]["user"] == currentUser) {
    createProductCard(
      array[i]["name"],
      array[i]["price"],
      array[i]["image"],
      array[i]["description"],
      array[i]["salesprice"],
      array[i]["count_of_prodct"]
    );
  }
}
