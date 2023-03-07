// importamos el router de la aplicacion
const apirouter = require("express").Router();

// importamos el middleware que vamos a usar para comprobar el token
const checkToken = require("../middleware/checkToken")
const loginRouter=require("./loginRouter")
const casseteRouter=require("./casseteRouter")
const cortesRouter=require("./cortesRouter")
const muestrasRouter=require("./muestraRouter")

// Creamos las distintas rutas que vayamos a tener, en los parametros: la ruta, el middleware y por ultimo la funcion que va a ejecutar
apirouter.use("/tecnico", loginRouter)
apirouter.use("/cassete",checkToken, casseteRouter)
apirouter.use("/cortes",checkToken, cortesRouter)
apirouter.use("/muestras",checkToken, muestrasRouter)

// exportamos el router
module.exports = apirouter;