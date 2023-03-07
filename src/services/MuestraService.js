//Importamos el usuario y sequelize
const sequelize = require('../database/db');

const Cortes= require("../database/models/Cortes");
const Tecnico = require('../database/models/Tecnico');
const Muestra = require('../database/models/Muestra');

const getAllMuestras = async (muestra)=>{
    const componentes = await Muestra.findAll(
        );
        return componentes;
}
const createMuestra=async(muestra)=>{
    const respuesta=await Muestra.create(muestra)
    return respuesta
}

module.exports={getAllMuestras, createMuestra}