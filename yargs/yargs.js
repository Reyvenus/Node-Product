const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "La base muestra cual es la tabla de multiplicar"
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }
        return true
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        describe: "Listar nos muestra la tabla de multiplicar y crea un archivo en el directorio",
        default: false
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        demandOption: true,
        default: 10,
        describe: "Muestra hasta que numero se tiene q multiplicar la base"
    })
    .argv

console.clear()
//console.log("2", process.argv)
//console.log("3", argv)
//console.log("base: yargs", argv.base)
//const base = 3

module.exports = argv
