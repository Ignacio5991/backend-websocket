const ProductManager = require('../productmanager');
const pm = new ProductManager ('./src/products.json');
const { emitdeleteproduct } = require('../utils/socket.io');
const { emitaddproduct } = require('../utils/socket.io');

const view = async (req, res) => {
  let  products  = await pm.getProducts();
  res.render('home',  products );
};

const realtime = async (req, res) => {
  res.render('realTimeProducts');
};

const realtimedelete = async (req, res) => {
  const id = req.params.pid;
  let eliminado = await pm.deleteProduct(parseInt(id));
  if (eliminado.error) {
    res.json(eliminado);
  } else {
    emitdeleteproduct(id);
    res.json(eliminado);
  }
};

const addrealtime = async (req, res) => {
  const body = req.body;
  const products = await pm.addProduct(body);
  if (products.error) {
    res.json(products);
  } else {
    console.log(products);
    emitaddproduct(products);
    res.json(products);
  }
};

module.exports = {
  view,
  realtime,
  realtimedelete,
  addrealtime,
};
