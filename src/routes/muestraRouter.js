// importamos el router y el controlador
const muestra = require("express").Router();
const controller = require("../controllers/MuestraController");

// para cada metodo vamos a crear una ruta, cuando queramos pasar un parametro pondremos al final de la ruta : seguido del nombre del parametro

muestra.get("/", controller.getAllMuestras);
muestra.post("/", controller.createMuestra);

module.exports= muestra