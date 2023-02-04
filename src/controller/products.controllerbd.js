const ProductManager = require("../ProductManager");
const productsModel = require ("../dao/models/products.model");

const getProduct = async (req, res) => {
  try {
    let product = await productsModel.find();
    console.log(product)
    return res.json({
      msg: 'ok',
      playload: product ,})
    
//res.render
('home', {product});    
  } catch (error) {
    return res.status(500).json({
      msg: 'error',
      playload: 'Error al obtener productos',
    })
  }
};

const addProduct = async (req,res) => {
  const product = req.body
  try {
    let newproduct = await productsModel.create(product)
    console.log(newproduct)
    return res.json ({
      msg: 'ok',
      playload: newproduct,
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'error',
      playload: 'Error al agregar producto',
    })
  };
}


module.exports ={
    getProduct,
    addProduct,
} 