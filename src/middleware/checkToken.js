const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req,res,next)=> {
    if (req.headers["user-token"]) {
        let token = req.headers["user-token"];
        let payload = {};
        try {
            payload = jwt.decode(token,"secreto");
        } catch(err){
            return res.json({error:"token incorrecto"});
        }

        if (payload.dateExp < moment().unix()) {
            return res.json({error:"token expirado"});
        }

    } else {
        res.send("token no enviado")
    }
    next();
}

module.exports = checkToken