const {Router} = require ("express");
const viewcontroller = require ('../controller/view.controller')

const router = Router();

router.get ('/', viewcontroller.view);
router.get ('/realtimeproducts/',viewcontroller.realtime);
router.delete ('/realtimeproducts/:pid',viewcontroller.realtimedelete);
router.post ('/realtimeproducts/',viewcontroller.addrealtime);

module.exports = router;