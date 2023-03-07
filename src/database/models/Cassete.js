//importamos sequelize y la BBDD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Cassete extends Model {

}
Cassete.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE
    },
    caracteristicas: {
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    }
    ,
    codigoqr: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "cassete",
    timestamps: false
})
module.exports = Cassete