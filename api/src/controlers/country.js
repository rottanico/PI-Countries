
const { Country } = require('../db')
const Model=require('./index')

const controlerCountry= new Model(Country) 
module.exports = controlerCountry;