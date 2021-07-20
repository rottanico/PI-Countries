const axios = require('axios')
const Sequelize=require('sequelize')
const { options } = require('../app')
const { TouristActivity,Country,country_activity } = require('../db')
Op = Sequelize.Op
class Models {
    constructor(modelo) {
        this.model = modelo
    }
    getAll = async (req, res, next) => {
        const offset=req.query.offset ? parseInt(req.query.offset,10): 0
        const order=req.query.order?req.query.order.toUpperCase(): 'ASC'
       
        const resultados = await this.model.findAndCountAll({
            offset:offset ,
            order: [['name', order]],
             limit: 10,
             attributes:{exclude:['createdAt','updatedAt','capital','subregion','area','population']}
        })
            .catch(error => next(error))
         res.status(200).json(resultados)

    }
    getAllFor = async (req, res, next) => {
        const offset=req.query.offset? parseInt(req.query.offset,10): 0
        const order=req.query.order?req.query.order.toUpperCase(): 'ASC'
       const continent=req.query.continent&&req.query.continent.charAt(0).toUpperCase() + req.query.continent.slice(1)
        const resultados = await this.model.findAndCountAll({
            offset: offset,
            order: [['name', order]],
             limit: 10,
             attributes:{exclude:['createdAt','updatedAt','capital','subregion','area','population']},
           where:{
               continent:continent
           }
        })
            .catch(error => next(error))
         res.status(200).json(resultados) }

    
    getById = async (req, res, next) => {
        const Id = req.params.id.toUpperCase()
        const result = await this.model.findByPk(Id,{
            attributes:{exclude:['createdAt','updatedAt']
                },
            include:{
                model:TouristActivity,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
            }
        })
         .catch(error => next(error))
       
          result?res.status(200).send(result):res.sendStatus(417) 
    }

    getByName = async (req, res, next) => {
        const name = req.query.name.charAt(0).toUpperCase() + req.query.name.slice(1)
        const offset=req.query.offset? parseInt(req.query.offset,10): 0
        const order=req.query.order?req.query.order.toUpperCase(): 'ASC'
        const resul = await this.model.findAndCountAll({ 
            offset: offset,
            order: [['name', order]],
             limit: 10,
             attributes:{exclude:['createdAt','updatedAt','capital','subregion','area','population']},
            where: { 
                name: {[Op.like]:`%${name}%`} 
            } 
        })
            .catch(error => next(error))
        return resul.rows === undefined ? res.status(417).send('no se encontró ningun pais con el nombre ' + name) : res.status(200).send(resul)
    }

    addCountry = async (req, res, next) => {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')
        countries.data.forEach(element => {
            this.model.findOrCreate({
                where: {
                    name: element.name,
                    id: element.alpha3Code,
                    img: element.flag,
                    continent: element.region,
                    capital:element.capital,
                    subregion:element.subregion,
                    area:element.area,
                    population:element.population
                }
            }).catch(error => next(error))
        });
        
         res.sendStatus(200)
    }


    addActivity = async (req, res, next) => {

        const { name, difficulty, term, season } = req.body
        var namesCountries=req.body.idCountry
       console.log(typeof namesCountries)
       namesCountries.forEach(async(namE) =>{
      
            var valor= await  Country.findOne({where: {name:namE.charAt(0).toUpperCase() + namE.slice(1)}})
                                .catch(error => next(error))
             const [value,status]=await this.model.findOrCreate({
                    where: {
                        name: name,
                        difficulty: difficulty,
                        term: term,
                        season: season, 
                    }
                })
                
            valor&&valor.addTouristActivity(value)
            
        })
        res.sendStatus(200)
    }
    allNames =  async (req, res, next) => {
        const result= await Country.findAll({
                            attributes:{exclude:['createdAt','updatedAt','capital','subregion','area','population','img','continent']}
                        })
         .catch(error => next(error))
       result&& res.status(200).send(result)
    }
    FindId= async (req, res, next)=>{
        const name=req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1)
        const result= await Country.findOne({
            attributes:{exclude:['createdAt','updatedAt','capital','subregion','area','population','img','continent','name']}
            ,where: {name:name}
            
        })
         .catch(error => next(error))
       !!result? res.status(200).send(result):res.send(null)
    }

    deleteActivity = async (req, res, next) => {
        const deleteId = req.params.id
        const dlt = await this.model.destroy({ where: { id: deleteId } })
            .catch(error => next(error))
        return res.sendStatus(205)
    }


}




module.exports = Models