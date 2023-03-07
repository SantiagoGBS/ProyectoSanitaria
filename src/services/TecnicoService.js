//Importamos el usuario y sequelize
const Tecnico = require("../database/models/Tecnico");
const sequelize = require('../database/db');

const login = async (user)=>{
    return await sequelize.query(`select * from tecnicos where email = '${user}'`)
}

//hacemos un create
const register = async (tecnico) => {
    return await Tecnico.create(tecnico);
}

const deleteTecnico = async (id) => {
    const respuesta=await Tecnico.destroy({
        where:{
            id:id
        }
    })
    return respuesta;
}

module.exports = {login, register, deleteTecnico} 