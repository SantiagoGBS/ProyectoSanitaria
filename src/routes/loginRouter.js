// importamos el router y el controlador
const login = require("express").Router();
const controller = require("../controllers/TecnicoController")

// para cada metodo vamos a crear una ruta, cuando queramos pasar un parametro pondremos al final de la ruta : seguido del nombre del parametro

login.get("/", controller.login);
login.post("/", controller.register);
login.delete("/:id", controller.deleteTecnico);

module.exports = login;