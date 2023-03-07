//importamos sequelize y la BBDD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Muestra extends Model {

}
Muestra.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE
    },
    observaciones: {
        type: DataTypes.STRING
    },
    codigoqr: {
        type: DataTypes.STRING
    }
    ,
    imagen: {
        type: DataTypes.STRING
    },
    tincion: {
        type: DataTypes.STRING
    },
    codigoqr: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "muestra",
    timestamps: false
})
module.exports = Muestra