const Mdb = require('./mdb.service')

const Productos = {
    obtenerTodos: async function (){
        const query = `
            SELECT * FROM producto
        `
        // Pasa mano del servicio de base datos 
        // A la capa de negocio
        const resultado = Mdb.query(query)
        return resultado
    },
    obtenerPorId: async function (id){
        const query = `
            SELECT * FROM producto
            WHERE id = ${id}
        `
        // Pasa mano del servicio de base datos 
        // A la capa de negocio
        const resultado = Mdb.query(query)
        return resultado
    },
    buscar: async function (nombre){
        const query = `
            SELECT * FROM producto
            WHERE nombre LIKE '%${nombre}%'
        `
        // Pasa mano del servicio de base datos 
        // A la capa de negocio
        const resultado = Mdb.query(query)
        return resultado
    },
    nuevo: async function (producto){
        const query = `
            INSERT INTO producto (nombre, precio, marca)
            VALUES ('${producto.nombre}', '${producto.precio}','${producto.marca}')
        `
        const resultado = Mdb.query(query)
        return resultado
    },
    editar: async function (producto){
        const query = `
            UPDATE producto SET 
                nombre = '${producto.nombre}',
                precio = '${producto.precio}',
                marca  = '${producto.marca}'
            WHERE id = ${producto.id}
        `
        const resultado = Mdb.query(query)
        return resultado
    },
    eliminar: async function (id){
        const query = `
            DELETE FROM producto 
            WHERE id = ${id}
        `
        const resultado = Mdb.query(query)
        return resultado
    }
}
module.exports = Productos