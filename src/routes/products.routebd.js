const {Router} = require ("express");
const productsControllerBD = require ('../controller/products.controllerbd')

const router = Router ();

router.get ('/', productsControllerBD.getProduct);
router.post('/',productsControllerBD.addProduct);
router.get('/:pid',productsControllerBD.getProductbyID)
router.delete('/:pid',productsControllerBD.deleteProduct)
router.put('/:pid',productsControllerBD.updateProducts)


// router.get ('/realtimeproducts',viewcontroller.realtime);
// router.delete ('/realtimeproducts/:pid',viewcontroller.realtimedelete);
// router.post ('/realtimeproducts/',viewcontroller.addrealtime);






module.exports = router;