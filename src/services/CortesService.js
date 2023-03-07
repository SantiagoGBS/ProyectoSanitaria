//Importamos el usuario y sequelize
const sequelize = require('../database/db');

const Cortes= require("../database/models/Cortes");
const Tecnico = require('../database/models/Tecnico');

const getAllCortes = async ()=>{
    const componentes = await Cortes.findAll(
        );
        return componentes;
}
const getCorte = async (id)=>{
    const corte = await Cortes.findOne({
        where:{corteid:id},
        include:{
            model:Tecnico,
            attributes:["id"]
        }
    });
        return corte;
}
module.exports={getAllCortes, getCorte}