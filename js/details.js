function getProduct() {
  var product = localStorage.getItem("singleproduct");
  // console.log("in side the function");
  // console.log(JSON.parse(product));
  return product;
}

document.getElementById("favorite").addEventListener("click", function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    alert("Product added to favorites!");
  } else {
    alert("Product removed from favorites!");
  }
});

// Simulating loading of reviews
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("reviews-container").innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">John Doe</h5>
                    <p class="card-text">Great product! Highly recommend it.</p>
                    <p class="card-text"><small class="text-muted">Posted on January 1, 2024</small></p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Jane Smith</h5>
                    <p class="card-text">Good value for money.</p>
                    <p class="card-text"><small class="text-muted">Posted on February 15, 2024</small></p>
                </div>
            </div>
        `;
  }, 1000);
});
///---------------------------------------------------------------------------- product data
var product = getProduct();
var description = document.getElementById("product-description");
product = JSON.parse(product);
//=====================================
var currentUser = sessionStorage.getItem("currentUser");
var allproduct = localStorage.getItem("prodectarr");

document.getElementById("add-to-cart").addEventListener("click", function () {
  var all = JSON.parse(allproduct);
  for (let index = 0; index < all.length; index++) {
    var element = all[index];
    if (
      product.name == element.name &&
      product.offercode == element.offercode &&
      product.price == element.price
    ) {
      all[index].count_of_prodct = 1;
      console.log(JSON.stringify(all));

      all[index].user = currentUser;
      localStorage.setItem("prodectarr", JSON.stringify(all));

      alert("Item added to cart");
    }
  }
});
//=====================================
//console.log(product);
description.innerHTML = product.description;
description.style.fontSize = "35px";

var _name = document.getElementById("product-title");
//console.log(product);
_name.innerHTML = product.name;
_name.style.fontWeight = "bold";
_name.style.fontSize = "40px";
var price = document.getElementById("product-price");
//console.log(product);
/** plp after here */

// var plp_div = document.getElementById("plp_specification");
// var battery = document.createElement("p");
// battery.innerText = product.plp_specifications["Battery Size"];
// plp_div.appendChild(battery);
// document.body.appendChild(plp_div);

/** end */
price.innerHTML = "Was: " + product.price;
price.style.color = "grey";
price.style.fontSize = "30px";
price.style.textDecoration = "line-through";

var discountprice = document.getElementById("discount");
discountprice.innerText = "Now : " + product.salesprice;
discountprice.style.fontWeight = "bold";
discountprice.style.fontSize = "35px";
var item = localStorage.getItem("singleproduct");
//console.log("plp test");
item = JSON.parse(item);
var plp = item.plp_specifications["Battery Size"];
//console.log(plp);
//console.log("here");

var battery = document.getElementById("battary");
var camera = document.getElementById("camera");
var Ram = document.getElementById("Ram");
var screensize = document.getElementById("screensize");

battery.innerText = item.plp_specifications["Battery Size"];
camera.innerText = item.plp_specifications["Primary Camera Resolution"];
Ram.innerText = item.plp_specifications["RAM Size"];
Ram.innerText = item.plp_specifications["Screen Size"];
battery.style.fontSize = "25px";
camera.style.fontSize = "25px";
screensize.style.fontSize = "25px";
Ram.style.fontSize = "25px";

var img1 = document.getElementById("img1");
img1.setAttribute("src", `${product.image}`);
img1.style.width = "400px";
//console.log(product.image);

var img2 = document.getElementById("img2");
img2.setAttribute("src", `${product.images[2]}`);
img2.style.width = "400px";
//console.log(product.images[3]);

var img3 = document.getElementById("img3");
img3.setAttribute("src", `${product.images[3]}`);
img3.style.width = "400px";
//console.log(product.images[3]);

var img4 = document.getElementById("img4");
img4.setAttribute("src", `${product.images[4]}`);
img4.style.width = "400px";
//console.log(product.images[3]);

var img5 = document.getElementById("img5");
img5.setAttribute("src", `${product.images[4]}`);
img5.style.width = "400px";
//console.log(product.images[3]);

//----------------------------------------------------------------------------
// function LoopOverImages(images) { /// try to solve
//   var len = images.length;
//   var div_images = document.getElementById("div_images");
//   console.log(len);
//   for (var i = 1; i <= len; i++) {
//     var img = document.createElement("img");
//     img.setAttribute("src", `${product.images[i]}`);
//     img.style.width = "400px";
//     div_images.appendChild(img);
//     console.log(product.images[i]);
//   }
// }
// LoopOverImages(product.images);
