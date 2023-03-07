// importamos el router y el controlador
const cassete = require("express").Router();
const controller = require("../controllers/CasseteController")

// para cada metodo vamos a crear una ruta, cuando queramos pasar un parametro pondremos al final de la ruta : seguido del nombre del parametro

cassete.get("/", controller.getAllCassetes);
cassete.get("/:id", controller.getCassete);
cassete.post("/", controller.createCassete);
module.exports = cassete;