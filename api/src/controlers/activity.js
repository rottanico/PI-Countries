const { TouristActivity } = require('../db')
const Models=require( './index')
class ModelsActivity extends Models{
    constructor(modelo){
        super(modelo)
    }
    
}
const controlerActivity = new ModelsActivity(TouristActivity) 

module.exports= controlerActivity;