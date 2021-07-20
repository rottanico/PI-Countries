const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('touristActivity', {
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.FLOAT,
            min: 1,
            max: 5
        },
        term: {
            type: DataTypes.FLOAT
        },
        season: { type: DataTypes.ENUM({
          values:["summer" ,"autumn" , "spring" ,"winter"]
        }) }
    });
};