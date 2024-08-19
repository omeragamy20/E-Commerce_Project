// get user
var currentUser = sessionStorage.getItem("currentUser");

//====================================
var cartcontent = [{}];

var http = new XMLHttpRequest();
http.open("get", "https://fakestoreapi.com/products");
http.onreadystatechange = function () {
  if (http.status == 200 && http.readyState == 4) {
    var products = JSON.parse(http.response);
    console.log("Inside onreadystatechange:", products[0]);
    for (var i = 0; i < products.length; i++) {
      // console.log(products[i].image);
      generateProductCard(products[i]);
    }
  }
};
http.send();
// console.log(product);

var contener = document.createElement("section");
contener.style.marginInline = "2%";
contener.style.display = "inline-block";

var cont = 0;

function generateProductCard(product) {
  var obj = {
    name: product["category"],
    description: product["description"],
    price: product["price"],
    image: product["image"],
    images: [product["image"], product["image"], product["image"]],
    salesprice: product["price"],
    offercode: product["id"],
    count_of_prodct: 0,
    user: null,
    plp_specifications: product["rating"],
  };
  cartcontent.push(obj);

  const productCard = document.createElement("div");
  // productCard.style.height = "510px";
  productCard.classList.add("product-card");
  productCard.style.display = "inline-block";
  productCard.style.marginInline = "1%";
  productCard.style.marginBlock = "15px";
  productCard.style.paddingInline = "10px";
  productCard.style.height = "max-content";
  // productCard.style.width = "600px";
  productCard.style.width = "23%";

  productCard.onclick = function () {
    // alert(product.id + " added to cart");
    // var items = JSON.parse(localStorage.getItem("product"));

    console.log(JSON.stringify(obj));
    var x = JSON.stringify(obj);
    console.log("HERE");
    localStorage.setItem(`singleproduct`, x);
  };

  //   productCard.style.display = "grid";
  var productImage = document.createElement("img");
  // productImage.style.marginLeft = "25px";
  // productImage.style.marginTop = "50px";
  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.style.mixBlendMode = "normal";
  productImage.style.width = "70%";
  productImage.style.height = "250px";
  productImage.style.marginInline = "15%";
  productImage.style.marginBlock = "10px";

  // productImage.style.height = "200px";
  // productImage.style.width = "200px";
  productCard.appendChild(productImage);
  // productCard.style.display = "inline-block";

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productTitle = document.createElement("h2");

  productTitle.textContent = product.title;
  productTitle.style.overflow = "hidden";
  productTitle.style.whiteSpace = "nowrap";
  productTitle.style.textOverflow = "ellipsis";
  productInfo.appendChild(productTitle);

  var productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productDescription.textContent = productDescription.textContent.substring(
    0,
    50
  );
  productInfo.appendChild(productDescription);

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product.price}`;
  productInfo.appendChild(productPrice);

  const productRating = document.createElement("p");
  productRating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
  productInfo.appendChild(productRating);

  const productCategory = document.createElement("p");
  productCategory.textContent = `Category: ${product.category}`;
  productInfo.appendChild(productCategory);

  productCard.appendChild(productInfo);
  contener.appendChild(productCard);
  //------------------------------------------------omar button -------------------------
  var buttoncart = document.createElement("button");
  buttoncart.innerHTML = "Add To Cart";
  buttoncart.style.fontSize = "25px";
  buttoncart.style.width = "98%";
  buttoncart.style.height = "40px";
  // buttoncart.style.padding = "10px";
  buttoncart.style.backgroundColor = "#ff3700";
  // buttoncart.style.display = "float-bottum";
  buttoncart.style.borderRadius = "10px";
  buttoncart.style.marginBlock = "5px";
  // buttoncart.style.marginTop = "80px";
  buttoncart.style.display = "none";
  productCard.appendChild(buttoncart);
  // var main = document.getElementById("allproducts");
  // main.appendChild(productCard);
  var x, y;
  buttoncart.onclick = function () {
    cont++;
    for (let i = 0; i < 63; i++) {
      if (product["id"] == cartcontent[i].offercode) {
        // console.log(cartcontent[i].description);
        x = cartcontent[i].count_of_prodct;
        //  console.log( cartcontent[i+1].count_of_prodct);
        cartcontent[i].count_of_prodct = ++x;
        cartcontent[i].user = currentUser;
        // console.log(x);
      }
    }
    // window.location = './Cart.html';
    var crtnum = document.getElementById("cart-number");
    crtnum.style.marginLeft = "4px";
    crtnum.innerHTML = `${cont}`;
    localStorage.setItem("prodectarr", JSON.stringify(cartcontent));
  };
  //------------------------------------------------omar button -------------------------
  productCard.onmousemove = function () {
    buttoncart.style.display = "block";
  };
  productCard.onmouseleave = function () {
    buttoncart.style.display = "none";
  };

  productImage.onclick = function () {
    for (let i = 0; i < 63; i++) {
      if (product["id"] == cartcontent[i].offercode) {
        y = cartcontent[i].offercode;
        //  console.log( cartcontent[i+1].count_of_prodct); transition
        cartcontent[i].count_of_prodct = ++x;
        // console.log(x);
      }
    }
    window.location = "../html/product-detail.html";
  };
}
document.body.appendChild(contener);

// Create and append the style element
function addStyles() {
  const style = document.createElement("style");
  style.textContent = `
      .product-card {
        border: 1px solid gray;
        border-radius: 15px;
        background-color: #fff;
      //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      //   overflow: hidden;
      //   max-width: 300px;
      //   margin: 20px;
        transition: transform 0.3s, box-shadow 0.3s;
      }
  
      .product-card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
  
      .product-card img {
        width: 100%;
        height: auto;
        // marginInline: 15%;
        // paddingInline: 10%
      }
  
      .product-info {
        padding: 15px;
      }
  
      .product-info h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #333;
      }
  
      .product-info p {
        font-size: 1em;
        margin: 5px 0;
        color: #666;
      }
    `;
  document.head.appendChild(style);
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
  addStyles();
});

// Example usage:

//select all categories
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => console.log(json));
