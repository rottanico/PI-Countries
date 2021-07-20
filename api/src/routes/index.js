const { Router } = require('express');
const getRouter = require('./country.js')
const postRouter= require('./activity.js')
const getDb=require('./savedb')
const router = Router()
router.use('/',getDb)
router.use('/country', getRouter)

router.use('/activity',postRouter)
module.exports = router;
