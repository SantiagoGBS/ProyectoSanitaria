// Para poder usar el servicio tendremos que importarlo
const services = require("../services/CortesService");

const getAllCortes = async (req, res) => {
    // Es MUY importante que pongamos el await ya que si no enviara la respuesta sin esperar a que se terminen de cargar los datos
    const cortes = await services.getAllCortes();
    // enviamos como respuesta el resultado de la consulta
    res.json(cortes);
}
const getCorte = async (req, res) => {
    const corte = await services.getCassete(req.params.id);
    res.json(corte);
}

module.exports = {getAllCortes, getCorte}