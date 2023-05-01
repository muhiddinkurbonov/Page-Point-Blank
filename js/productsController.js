export default class ProductsController {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this._products = JSON.parse(localStorage.getItem("products")) || [];
  }

  addItem(name, description, img, price) {
    const createdAt = new Date().toLocaleString();
    const newProduct = {
      id: this.currentId++,
      name,
      description,
      img,
      price,
      createdAt,
    };
    this._products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(this._products));
    console.log(this._products);
  }

  getProducts() {
    return this._products;
  }
}
