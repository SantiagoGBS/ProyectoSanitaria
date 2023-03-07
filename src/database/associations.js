const Tecnico =require("./models/Tecnico")
const Cassete =require("./models/Cassete")
const Cortes =require("./models/Cortes")
const Muestra =require("./models/Muestra")


Tecnico.hasMany(Cassete)
Cassete.belongsTo(Tecnico)

Tecnico.hasMany(Cortes)
Cortes.belongsTo(Tecnico)

Tecnico.hasMany(Muestra)
Muestra.belongsTo(Tecnico)

Cassete.hasMany(Cortes)
Cortes.belongsTo(Cassete)

Cortes.hasMany(Muestra)
Muestra.belongsTo(Cortes)

