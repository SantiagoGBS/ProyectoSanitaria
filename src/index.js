// instalamos bodyParser de manera que podamos acceder al body de las peticiones
const bodyParser = require("body-parser");
// instalamos express el cual es un framework que nos va a permitir crear las rutas
const express = require("express");
// creamos un objeto de express
const app = express();

// importamos el fichero donde tendremos todas las rutas de nuestra api
const apiroutes = require("./routes/apiRouter.js");

// importamos nuestro fichero de la base de datos
const sequelize=require("./database/db")

// Conversión a json datos que nos envína para post, put, patch...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// creamos la ruta raiz de la aplicacion
app.use("/sanitaria", apiroutes);

// importamos nuestro fichero con las relaciones de la base de datos
require("./database/associations")

// creamos una constante con el puerto que vamos a usar
const PORT = process.env.PORT || 3000;
// Le indicamos a la aplicacion que escuche en el puerto creado anteriormente
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  // con sequelize sync indicaremos si queremos forzar la actualizacion de la base de datos. Si en force ponemos true nos creará la base de datos de nuevo por lo tanto perderemos los datos
  sequelize.sync({force:false}).then(()=>console.log("conectado"))
});