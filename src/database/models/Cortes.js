//importamos sequelize y la BBDD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Cortes extends Model {

}
Cortes.init({
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
}, {
    sequelize,
    modelName: "cortes",
    timestamps: false
})
module.exports = Cortes