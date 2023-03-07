// importamos el router y el controlador
const cortes = require("express").Router();
const controller = require("../controllers/CortesController")

// para cada metodo vamos a crear una ruta, cuando queramos pasar un parametro pondremos al final de la ruta : seguido del nombre del parametro

cortes.get("/", controller.getAllCortes);
cortes.get("/:id", controller.getCorte);

module.exports=cortes