const fs = require("fs")
const colors = require("colors")

const crearTabla = async (base = 5, listar = false, hasta = 2) => {

    try {
        let resultado = ""
        let consola = ""
            for (let index = 0; index <= hasta; index++) {
                resultado += `${base} ${"x".green} ${index} ${"=".green} ${base * index}\n`
                consola += `${base} x ${index} = ${base * index}\n`
            }
            
        if (listar) {
            console.log("======================".america)
            console.log(`     Tabla del ${base}`.blue)
            console.log("======================".america)
            console.log(resultado)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)
        return `tabla-${base}.txt`

    } catch (err) {
        throw err
    }
}


module.exports = {
    crearTabla
}
