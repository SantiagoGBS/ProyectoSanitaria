// Para poder crear el token tendremos que instalar e importar moment para que podamos manejar la fecha de creacion y expiracion del token
const moment = require("moment");
// importamos el servicio
const service = require("../services/tecnicoService")
// para cifrar y comparar las contraseñas tendremos que instalar e importar bcryptjs
const bcrypt = require('bcryptjs');
// Para la creacion y manejo de tokens instalaremos y ejecutaremos jwt-simple
const jwt = require('jwt-simple');
 const Tecnico = require("../database/models/Tecnico");

// Creamos la funcion que nos generara el token, para ello tendremos que pasar la informacion del usuario
const createToken = (userInfo) => {
    // el objeto payload tendra tanto la informacion del usuario como la fecha de creacion como la de expiracion del token
    let payload = {
        userId: userInfo.id,
        userMail: userInfo.email,
        // con moment().unix() obtendremos la fecha en segundos desde 1970
        createdAt: moment().unix(),
        // con moment().add indicaremos el tiempo que queremos añadir, si queremos que sean minutos pondremos minutes y lo pasaremos a formato unix
        dateExp: moment().add(700, "minutes").unix()
    }
    // retornamos el token generado con jwt.encode al que le pasaremos el objeto que queremos cifrar y una clave secreta
    return jwt.encode(payload, "secreto");
}

// creamos la funcion del login donde pasaremos tanto la request como la respuesta
const login = async (req, res) => {
    // a la hora de realizar las consultas es recomendable usar try/catch

    try {
        // Realizamos la consulta que nos devolvera la informacion del usuario siempre y cuando exista dicho usuario
        const user = await service.login(req.body.email);
        //comprobamos que existe el usuario
        if (user) {
            // ahora tendremos que comparar las contraseñas para ello usaremos bcrypt.compareSync al que le pasaremos la contraseña introducida y la contraseña guardada en la base de datos
            const isCorrectPass = bcrypt.compareSync(req.body.password, user[0][0].password)
            if (isCorrectPass) {
                // si coinciden crearemos el token con la informacion del usuario y la clave
                res.send({ success: createToken(user[0][0]) })
                // res.send(user[0][0])
            } else {
                res.send("usuario o contraseña incorrecta")
            }
        } else {
            res.send("usuario o contraseña incorrecta")
        }
    } catch (error) {
        res.send("usuario o contraseña incorrecta")
    }

}
const register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            email: req.body.email,
            password: hashedPassword,
            nombre:req.body.nombre,
            apellidos:req.body.apellidos,
            centro:req.body.centro,
            curso:req.body.curso,
        }
        const usuario = await service.register(user)
        res.json(usuario);
    } catch (error) {
        res.json("error al registrar")
    }
}
const deleteTecnico = async (req, res) => {
    const respuesta = await service.deleteTecnico(req.params.id)
    res.json(respuesta)
}
module.exports={login, register, deleteTecnico}