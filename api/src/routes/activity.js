const { Router } = require('express')
const controlerActivity=require('../controlers/activity')
const router = Router();
router.post('/',controlerActivity.addActivity)
router.get('/All',controlerActivity.getAll )
router.delete('/:id', controlerActivity.deleteActivity)
module.exports = router;