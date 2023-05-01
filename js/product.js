import ProductsController from "./productsController.js";

const productCard = (img, name, description, price) => `
<div class="product-card">
  <img src="${img}" class="product-card-img-top" width="250px" alt="...">
  <div class="product-card-body">
    <h5 class="product-card-name">${name}</h5>
    <p class="product-card-description">${description}</p>
    <p class="product-card-price">$${price}</p>
  </div>
</div>
`;

const productsListElement = document.querySelector(".products");

const addProductCard = ({ img, name, description, price }) => {
  const productTextNode = productCard(img, name, description, price);

  const productNode = document
    .createRange()
    .createContextualFragment(productTextNode);
  productsListElement.appendChild(productNode);
};

const name = document.getElementById("product-name");
const description = document.getElementById("product-description");
const img = document.getElementById("product-image-url");
const price = document.getElementById("product-price");
const addForm = document.getElementById("add-product");

const productsController = new ProductsController();

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (name.value === "" || description.value === "" || img.value === "" || price.value === "") {
    console.log("Ensure you input a value for all fields");
    return;
  }
  const productItem = {
    name: name.value,
    description: description.value,
    img: img.value,
    price: price.value
  };

  productsController.addItem(
    productItem.name,
    productItem.description,
    productItem.img,
    productItem.price
  );
  addProductCard(productItem);
  addForm.reset();
});


productsController.getProducts().forEach(product => {
  addProductCard(product)
})