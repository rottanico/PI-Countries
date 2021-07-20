
const {Router}=require('express')
const controlerCountry=require('../controlers/country')
const router=Router()

router.get('/Home',controlerCountry.addCountry)
module.exports= router