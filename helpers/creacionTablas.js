const fs = require("fs")
const colors = require("colors")

//crear tabla de * con promesas
// const crearTabla = (base = 5, listar = false) => {
//     let resultado = ""
//     return new Promise((resolve, reject) => {

//         if (listar) {
//             console.log("======================")
//             console.log(`     Tabla del ${base}`)
//             console.log("======================")

//             for (let index = 0; index < 11; index++) {
//                 resultado += `${base} x ${index} = ${base * index}\n`
//             }

//             fs.writeFileSync(`tabla-${base}.txt`, resultado)
//         }
//         resolve( resultado)

//     })
// }

//crear tabla de * con async-Await
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

//crear tabla de * sin promesas
// const crearTabla = (base) => {
//     let resultado = ""
//     console.clear()
//     console.log("======================")
//     console.log(`     Tabla del ${base}`)
//     console.log("======================")

//     for (let index = 0; index < 11; index++) {
//         resultado += `${base} x ${index} = ${base * index}\n`
//     }

//     fs.writeFile(`tabla-${base}.txt`, resultado, (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("Archivo creado con exito")
//     })
// }


module.exports = {
    crearTabla
}