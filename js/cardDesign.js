function createProductCard(_name, _price, _img, _desc, _sale_price) {
  var mainn = document.getElementById("homemain");
  // Create the card div
  const card = document.createElement("div");
  card.style.display = "inline-block";
  card.style.backgroundColor = "#dae0eb";
  card.classList.add("card");
  // <<<<<<< HEAD
  // card.style.margin = "15px";
  card.style.height = "480px";
  card.style.width = "300px";
  card.style.position = "static";
  // =======
  card.style.margin = "15px";
  card.style.padding = "15px";

  card.style.height = "600px";
  card.style.width = "350px";
  // >>>>>>> 21e7757f86804da6a42a96d94d6d49baf849b190

  // Create the best seller badge
  const bestSellerBadge = document.createElement("div");
  bestSellerBadge.style.width = "300px";
  // bestSellerBadge.style.display = "inline-block";
  bestSellerBadge.style.backgroundColor = "green";
  bestSellerBadge.classList.add("best-seller-badge");
  bestSellerBadge.textContent = "Best Seller";
  card.appendChild(bestSellerBadge);

  // Create the product image
  const productImage = document.createElement("img");
  productImage.src = `${_img}`;
  productImage.style.width = "300px";
  productImage.style.height = "300px";
  productImage.classList.add("product-image");
  card.appendChild(productImage);

  // Create the product title
  const productTitle = document.createElement("h3");
  productTitle.classList.add("product-title");
  productTitle.textContent = `${_name}`;

  card.appendChild(productTitle);

  // Create the rating div
  const rating = document.createElement("div");
  rating.classList.add("rating");

  const ratingIcon = document.createElement("i");
  ratingIcon.classList.add("fas", "fa-star", "rating-icon");
  rating.appendChild(ratingIcon);

  const ratingText = document.createElement("span");
  ratingText.classList.add("rating-text");
  ratingText.textContent = _desc;
  // ratingText.style.overflow = "hidden";
  // ratingText.style.maxWidth = "50px";
  // // ratingText.style.maxHeight = "50px";
  // ratingText.style.whiteSpace= "nowrap"
  // ratingText.style.textOverflow = "ellipsis";

  rating.appendChild(ratingText);

  card.appendChild(rating);

  // Create the price paragraph
  const price = document.createElement("p");
  price.classList.add("price");
  price.style.fontSize = "25px";

  const priceText = document.createTextNode(_sale_price);
  price.appendChild(priceText);

  const oldPrice = document.createElement("span");
  oldPrice.classList.add("old-price");
  oldPrice.textContent = _price;
  price.appendChild(oldPrice);

  const discount = document.createElement("span");
  discount.classList.add("discount");
  discount.textContent = "29% OFF";
  price.appendChild(discount);

  card.appendChild(price);

  // Create the delivery paragraph
  const delivery = document.createElement("p");
  delivery.classList.add("delivery");
  delivery.textContent = "Free Delivery";
  card.appendChild(delivery);

  // Create the express div
  const express = document.createElement("div");
  express.classList.add("express");

  const expressIcon = document.createElement("img");
  expressIcon.src = "https://i.imgur.com/uO7j4t2.png";
  expressIcon.classList.add("express-icon");
  express.appendChild(expressIcon);

  const expressText = document.createElement("span");
  expressText.classList.add("express-text");
  expressText.textContent = "Get it by 20 July";
  express.appendChild(expressText);

  card.appendChild(express);

  // Create the favorite icon
  const favoriteIcon = document.createElement("i");
  favoriteIcon.classList.add("fas", "fa-heart", "favorite-icon");
  card.appendChild(favoriteIcon);

  // Create the add to cart button
  const cartButton = document.createElement("button");
  cartButton.style.width = "300px";
  cartButton.style.height = "30px";
  cartButton.style.backgroundColor = "green";
  cartButton.style.display = "inline";
  cartButton.classList.add("cart-button");
  cartButton.textContent = "Add to Cart";
  card.appendChild(cartButton);

  // Append the card to the body or any other container
  mainn.appendChild(card);
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../apis/api.json");
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
  console.log(xmlhttp.readyState);
  console.log(xmlhttp.status);
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var response = JSON.parse(xmlhttp.response).phones;
    // console.log(response.phones); // print response
    // console.log(response.phones.length);

    for (var i = 0; i < response.length; i++) {
      createProductCard(
        response[i]["brand"],
        response[i]["price"],
        response[i]["image_key"],
        response[i]["name"],
        response[i]["sale_price"]
      );
      console.log(response[i]["brand"]);
    }
  }
};
