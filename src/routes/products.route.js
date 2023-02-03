const {Router} = require ("express")

const productscontroller = require ('../controller/products.controller');
const ProductsModel = require("../models/products.model");

const router = Router (); 

router.get('/',productscontroller.getProducts);
router.get('/:pid',productscontroller.ProductsbyId);
router.post('/',productscontroller.addProduct);
router.put('/:pid',productscontroller.updateProducts);
router.delete('/:pid',productscontroller.deleteProduct);


/*Rutas de Mongoose*/ 

router.get('/',async (req,res)=>{
    try{
    const products = await ProductsModel.find();
    return res.status(200).json({
        msg:'Ok',
        payload:'products'
    })
    }catch (error){
        return res.status(500).json({
            msg:'error',
            payload:'error al obtener los productos'
        })
    }
})


module.exports = router;