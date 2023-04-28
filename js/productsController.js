class ProductsController {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.products = [];
  }

  addItem(name, description, img) {
    const createdAt = new Date().toLocaleString();
    const newProduct = {
      id: this.currentId++,
      name,
      description,
      img,
      createdAt,
    };
    this.products.push(newProduct);
  }
}

// const product = new ProductsController();
// product.addItem("pen", "great pen", "pen.jpg");
// console.log(product.products);
