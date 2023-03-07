// Para poder usar el servicio tendremos que importarlo
const services = require("../services/muestraService");

const getAllMuestras = async (req, res) => {
    // Es MUY importante que pongamos el await ya que si no enviara la respuesta sin esperar a que se terminen de cargar los datos
    const muestra = await services.getAllMuestras();
    // enviamos como respuesta el resultado de la consulta
    res.json(muestra);
}
const createMuestra = async (req, res) => {
    // Es MUY importante que pongamos el await ya que si no enviara la respuesta sin esperar a que se terminen de cargar los datos
    const muestra = await services.createMuestra(req.body.id);
    // enviamos como respuesta el resultado de la consulta
    res.json(muestra);
}


module.exports = {getAllMuestras, createMuestra}