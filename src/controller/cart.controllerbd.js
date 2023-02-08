const ProductManagerBd = require("../dao/productmanager.bd");
const modelCarts = require('../dao/models/carts.model')
const modelProducts = require('../dao/models/products.model')

const createCarts = async (req,res)=>{
    const createcart = req.body 
    try{  
        const cart = await modelCarts.create(createcart);
        return res.json({
         msg:'Ok',
         playload: cart,
         })
     } catch (error) {
       return res.status(500).json({
         msg:'error',
         playload: "Error al crear Carritos",
       })
     }   

}


const bdgetCartId = async (req, res) => {
     const id = req.params.cid
    try{  
         const carts = await modelCarts.findById(id);
         return res.json({
          msg:'Ok',
           playload: carts,
          })
      } catch (error) {
        return res.status(500).json({
          msg:'error',
          playload: "Error al Mostrar Carritos",
        })
      }   
       
}
const addProductToCart = async (req, res)=>{
    const {cid,pid} = req.params
    
    try{  
        const product = await modelProducts.findById(pid);
        if(product){
            const id = JSON.stringify(product)
            JSON.parse(id)
             console.log(id)
        }
       
     } catch (error) {
       return res.status(500).json({
         msg:'error',
         playload: "Error al Agregar Producto",
       })
     }   
}


module.exports = {
    createCarts,
    bdgetCartId,
    addProductToCart,
   
}