const { Router } = require('express')
const controlerCountry=require('../controlers/country')
const router = Router();

router.get('/All/Page/',controlerCountry.getAll)
router.get('/All',controlerCountry.getAllFor)
router.get('/AllNames',controlerCountry.allNames)
router.get('/Find/:name',controlerCountry.FindId)
router.get('/:id',controlerCountry.getById)
router.get('/',controlerCountry.getByName)









module.exports = router