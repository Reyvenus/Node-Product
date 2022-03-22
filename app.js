const {crearTabla} = require("./helpers/creacionTablas")
const argv = require("./yargs/yargs")
const colors = require("colors")

crearTabla(argv.b, argv.l, argv.h)
    .then(archivoNuevo => console.log(archivoNuevo.rainbow, "creado"))
    .catch(err => console.log(err))