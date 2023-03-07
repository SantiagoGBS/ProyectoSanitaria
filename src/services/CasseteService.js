//Importamos el usuario y sequelize
const sequelize = require('../database/db');
const Cassete = require("../database/models/Cassete");
const Tecnico = require('../database/models/Tecnico');

const getAllCassetes = async (user)=>{
    const componentes = await Cassete.findAll(
        );
        return componentes;
}

const getCassete = async (id)=>{
    const cassete = await Cassete.findOne({
        where:{tecnicoId:id},
        include:{
          model:Tecnico,
          attributes:["id"]
        }
      
      })
      return cassete;
}

const createCassete=async(cassete)=>{
    const respuesta=await Cassete.create(cassete)
    return respuesta
}
const updateCassete=async(cassete)=>{
  const newCassete = {id:id, ...cassete}
  const respuesta = await Cassete.update(newCassete,{
      where: {
          id:id
      }
  })
  return respuesta;
}

module.exports = { getAllCassetes, getCassete, createCassete, updateCassete }