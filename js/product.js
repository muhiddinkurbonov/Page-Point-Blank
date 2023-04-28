import ProductsController from "./productsController.js";

const productCard = (img, name, description) => `
<div class="product-card">
  <img src="${img}" class="product-card-img-top" width="250px" alt="...">
  <div class="product-card-body">
    <h5 class="product-card-name">${name}</h5>
    <p class="product-card-description">${description}</p>
  </div>
</div>
`;

const productsListElement = document.querySelector(".products");

const addProductCard = ({ img, name, description }) => {
  const productTextNode = productCard(img, name, description);

  const productNode = document
    .createRange()
    .createContextualFragment(productTextNode);
  productsListElement.appendChild(productNode);
};

const name = document.getElementById("product-name");
const description = document.getElementById("product-description");
const img = document.getElementById("product-image-url");
const addForm = document.getElementById("add-product");

const productsController = new ProductsController();

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (name.value === "" || description.value === "" || img.value === "") {
    console.log("Ensure you input a value for all fields");
    return;
  }
  const productItem = {
    name: name.value,
    description: description.value,
    img: img.value,
  };

  productsController.addItem(
    productItem.name,
    productItem.description,
    productItem.img
  );
  addProductCard(productItem);
  addForm.reset();
});


productsController.getProducts().forEach(product => {
  addProductCard(product)
})