// The response from the request we sent to the endpoint
const data = [
  {
    id: 1,
    name: "365 Signature Hoodie",
    price: 33.95,
    image: "./images/green_hoodie.png",
    color: ["#99C3CC", "#CC9999", "#CB99CC", "#BCD9B2"],
  },
  {
    id: 2,
    name: "Organic Skinny High Waist Jeans",
    price: 33.95,
    image: "./images/jean.png",
    color: ["#99C3CC", "#CC9999", "#CB99CC", "#BCD9B2"],
  },
  {
    id: 3,
    name: "Organic Skinny High Waist Jeans",
    price: 33.95,
    image: "./images/hoodie.png",
    color: ["#99C3CC", "#CC9999", "#CB99CC", "#BCD9B2"],
  },
  {
    id: 4,
    name: "365 Signature Hoodie",
    price: 33.95,
    image: "./images/green_hoodie.png",
    color: ["#99C3CC", "#CC9999", "#CB99CC", "#BCD9B2"],
  },
  {
    id: 5,
    name: "Organic Skinny High Waist Jeans",
    price: 33.95,
    image: "./images/jean.png",
    color: ["#99C3CC", "#CC9999", "#CB99CC", "#BCD9B2"],
  },
  {
    id: 6,
    name: "Organic Skinny High Waist Hoodie",
    price: 33.95,
    image: "./images/hoodie.png",
    color: ["#99C3CC", "#CC9999", "#CB99CC", "#BCD9B2"],
  },
];
function thumbnailler(products_element) {
  let [firing, currPos, prevX] = [false, 0, 0];

  products_element.addEventListener("mousedown", function (e) {
    prevX = e.clientX;
    e.preventDefault();
    firing = true;
  });
  products_element.addEventListener("mousemove", ({ clientX: newX }) => {
    if (!firing) return;
    let newPos = currPos - (newX - prevX);
    let availableOffset =
      products_element.scrollWidth - products_element.clientWidth;
    if (newPos > availableOffset) {
      newPos = availableOffset;
    }
    if (newPos < 0) {
      newPos = 0;
    }
    prevX = newX;
    products_element.scrollTo(newPos, 0);
    currPos = newPos;
  });
  products_element.addEventListener("mouseup", function (e) {
    firing = false;
  });
  products_element.addEventListener("mouseleave", () => {
    firing = false;
  });
}
function initialFunction() {
  var products_element = document.getElementById("products");
  data.map((o, i) => {
    var product_container_element = document.createElement("div");
    product_container_element.className = "product-container";
    // product img
    var img_element = document.createElement("img");
    img_element.src = o?.image;
    img_element.className = "image-product";
    product_container_element.appendChild(img_element);
    // product title
    var product_title = document.createElement("p");
    product_title.innerHTML = o?.name;
    product_title.className = "product-title";
    product_container_element.appendChild(product_title);
    //
    var info_product_element = document.createElement("div");
    info_product_element.className = "info-product";
    // product price
    var info_product_price = document.createElement("p");
    info_product_price.className = "product-price";
    info_product_price.innerHTML = "€" + o?.price;
    info_product_element.appendChild(info_product_price);
    // product colors
    var color_product_element = document.createElement("div");
    color_product_element.className = "color-palate";
    o?.color?.map((color, i) => {
      var color_element = document.createElement("div");
      color_element.className = "color";
      color_element.style.backgroundColor = color;
      if (i === 0) {
        var selected_color_element = document.createElement("div");
        selected_color_element.className = "selected-color";
        selected_color_element.appendChild(color_element);
        color_product_element.appendChild(selected_color_element);
      } else {
        color_product_element.appendChild(color_element);
      }
    });
    info_product_element.appendChild(color_product_element);
    product_container_element.appendChild(info_product_element);
    products_element.appendChild(product_container_element);
    thumbnailler(products_element);
  });
}

window.onload = initialFunction;
