const {Router} = require ("express");
const productsControllerBD = require ('../controller/products.controllerbd')

const router = Router ();

router.get ('/', productsControllerBD.getProduct);
router.post('/realtimeproducts/',productsControllerBD.addProduct);
// router.get ('/realtimeproducts',viewcontroller.realtime);
// router.delete ('/realtimeproducts/:pid',viewcontroller.realtimedelete);
// router.post ('/realtimeproducts/',viewcontroller.addrealtime);






module.exports = router;