const Mdb = require('./mdb.service')
const jwt = require('jsonwebtoken')

const Usuario = { 
    login: async function (usuario, clave){
        const query = `
            SELECT usuario, id FROM usuarios
            WHERE usuario = ? AND clave = MD5(?)
        `
        // Pasa mano del servicio de base datos 
        // A la capa de negocio
        let resultado   = await Mdb.query(query, [usuario, clave])
        resultado       = resultado[0]
        resultado.token = jwt.sign({id: resultado.id, usuario: usuario}, SECRET)
        return resultado
    }
}
module.exports = Usuario