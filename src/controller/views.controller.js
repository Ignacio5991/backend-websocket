const ProductManager = require("../productmanager");
const pm = new ProductManager ("./src/products.json")
const {emitdeleteproduct} = require ("../utils/socket.io")

const views = async (req,res)=>{
    let {products} = await pm.getProducts();
    console.log(products)

    res.render("home",{products});
}

const realtime = async (req,res)=>{
    res.render("realTimeProducts")
}

const realtimedelete = async (req,res)=>{
    const id = req.params.pid 
    let eliminado = await pm.deleteProduct(parseInt(id));
    if(eliminado.error){
        res.status(eliminado.status).send(eliminado)
    } else {
        emitdeleteproduct(id);
        res.json(eliminado)
    }
}


module.exports = {
    views,
    realtime,
    realtimedelete
}

