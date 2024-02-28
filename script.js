const products = [
  {
    name: "Sony Playstation 5",
    url: "images/playstation_5.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "images/samsung_galaxy.png",
    category: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "images/cannon_eos_camera.png",
    category: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "images/sony_a7_camera.png",
    category: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "images/lg_tv.png",
    category: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "images/nintendo_switch.png",
    category: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "images/xbox_series_x.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "images/samsung_tv.png",
    category: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "images/google_pixel.png",
    category: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "images/sony_zv1f_camera.png",
    category: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "images/toshiba_tv.png",
    category: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "images/iphone_14.png",
    category: "smartphones",
    price: 999.99,
  },
];

// select dom elements
const productsWrapper = document.getElementById("products-wrapper");

const checkboxes = document.querySelectorAll(".check");

const filtersContainer = document.getElementById("filters-container");

const searchInput = document.getElementById("search");

const cartCount = document.getElementById("cart-count");

// init  cart item count, use let so that you can modify the value later on
let cartItemCount = 0;

// init product element array
const productElements = [];

// loop over products and create an element for each product
products.forEach((product) => {
  const productElement = createProductElement(product);

  productElements.push(productElement);
  productsWrapper.appendChild(productElement);
});

// product element function
function createProductElement(product) {
  // create a product element
  const productElement = document.createElement("div");

  // add a class name to it for tailwind to recognize
  productElement.className = "item space-y-2";

  // add the content of the product element
  productElement.innerHTML = `
    <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">

      <img src="${product.url}" alt="${
    product.name
  }" class="w-full h-full object-cover">
      <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 transition translate-y-full group-hover:translate-y-0">
          Add to Cart
      </button>
    </div>
    <p class="text-xl">${product.name}</p>
    <strong>#${product.price.toLocaleString()}</strong>`;

  productElement.querySelector(".status").addEventListener("click", updateCart);

  // return product element
  return productElement;
}

// update cart
function updateCart(e) {
  const statusElement = e.target;

  if (statusElement.classList.contains("added")) {
    // remove from cart, change text and color
  } else {
    // add to cart
    statusElement.classList.add("added");
    statusElement.innerText = "Remove from Cart";
    statusElement.classList.remove("bg-gray-800");
  }
}
