const fs = require("fs");


const writeFile = (path, Products) =>
  fs.promises.writeFile(path, JSON.stringify({ products: Products }));

const readFile = async (path) => {
  const GetProducts = await fs.promises.readFile(path);
  const Result = JSON.parse(GetProducts);
  return Result;
};

class ProductManager {
  constructor(path) {
    this.path = path;
  }
  CreateFile = async () => {
    const File = fs.existsSync(this.path);
    if (File) {
      const { products } = await readFile(this.path);
      this.Product = products;
    } else {
      await writeFile(this.path, this.Product);
    }
  };

  bdgetProducts = async (limit) => {
    if (!limit) {
      return products;
    } else {
      const arrayFiltrado = products.slice(0, limit);
      return arrayFiltrado;
    }
  };

  addProduct = async (objeto) => {
  };


  

  getProductById = async (id) => {
  };


  UpdateProduct = async (id, body) => {
  };

  deleteProduct = async (id) => {
  };
}

module.exports = ProductManager;