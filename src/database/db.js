const Sequelize = require("sequelize")
//cambiamos el primer parametro NOMBRE de la BBDD. 
const sequelize = new Sequelize("sanitariadb","root","",{
    host:"localhost",
    dialect:"mysql"
})
module.exports=sequelize