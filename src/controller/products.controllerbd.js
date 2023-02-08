const ProductManagerBd = require('../dao/productmanager.bd');
const product = new ProductManagerBd ('./src/products.json')
const productsModel = require('../dao/models/products.model');

const getProduct = async (req, res) => {
    const {limits:limits=""} = req.query
  try {
    if (!limits){
    let product = await productsModel.find()
    res.render('home',{product})
    return res.json({
      msg: 'ok',
      playload: product,
    });
}else{
    let product = await productsModel.find().limit(limits);;
    console.log(product);
    return res.json({
      msg: 'ok',
      playload: product,
    });
}
   //res.render
  } catch (error) {
    return res.status(500).json({
      msg: 'error',
      playload: 'Error al obtener productos',
    });
  }
};

const addProduct = async (req, res) => {
  const product = req.body;
  try {
    let newproduct = await productsModel.create(product);
    console.log(newproduct);
    return res.json({
      msg: 'ok',
      playload: newproduct,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'error',
      playload: 'Error al agregar producto',
    });
  }
};

const getProductbyID = async (req, res) => {
    const id = req.params.pid;
    try {
      let productID = await productsModel.findById(id);
      console.log(productID);
      return res.json({
        msg: 'ok',
        playload: productID,
      });
  
      //res.render
    } catch (error) {
      return res.status(500).json({
        msg: 'error',
        playload: 'Error al obtener productos',
      });
    }
  };

  const deleteProduct = async (req, res) => {
    const id = req.params.pid;
    try {
      let deleteProduct = await productsModel.findByIdAndDelete(id);
      console.log(deleteProduct);
      return res.json({
        msg: 'ok',
        playload: deleteProduct,
      });
  
      //res.render
    } catch (error) {
      return res.status(500).json({
        msg: 'error',
        playload: 'Error al obtener productos',
      });
    }
  };

  const updateProducts = async (req, res) => {
    const id = req.params.pid;
    const{title, description, code, price, status, stock, category, thumbnail} = req.body;
    try {
      let updateProducts = await productsModel.findByIdAndUpdate(id,{title, description, code, price, status, stock, category, thumbnail});
      console.log(updateProducts);
      return res.json({
        msg: 'ok',
        playload: updateProducts,
      });
  
      //res.render
    } catch (error) {
      return res.status(500).json({
        msg: 'error',
        playload: 'Error al obtener productos',
      });
    }
  };


module.exports = {
  getProduct,
  addProduct,
  getProductbyID,
  deleteProduct,
  updateProducts
};
