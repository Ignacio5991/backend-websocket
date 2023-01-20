const {Router} = require ("express");
const viewcontroller = require ('../controller/views.controller')

const router = Router ();

router.get ('/views', viewcontroller.views);
router.get ('/realtimeproducts',viewcontroller.realtime);
router.delete ('/realtimeproducts/:pid',viewcontroller.realtimedelete)






module.exports = router;