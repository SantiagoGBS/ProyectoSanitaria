const services = require("../services/casseteService");

const getAllCassetes = async (req, res) => {
    const componentes = await services.getAllCassetes();
    res.json(componentes);
}

const getCassete = async (req, res) => {
    const equipo = await services.getCassete(req.params.id);
    res.json(equipo);
}

const createCassete = async (req, res) => {
    const respuesta = await services.createCassete(req.body)
    res.json(respuesta);
}

const updateCassete = async(req,res)=> {
    const respuesta = await services.updateCassete(req.params.id,req.body)
    res.json(respuesta)
}

module.exports = { getAllCassetes, getCassete, createCassete, updateCassete }