//importamos sequelize y la BBDD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Tecnico extends Model {

}
Tecnico.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    curso: {
        type: DataTypes.STRING
    }
    ,
    centro: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "tecnico",
    timestamps: false
})
module.exports = Tecnico