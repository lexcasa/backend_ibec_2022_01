const jwt = require('jsonwebtoken')

const Middleware = {
    verify: function (req, res, next){
        // Interceptar el Req
        // Verificar en los headers si tiene una propiedad token
        // Si token === 123
        // Estoy verificado
        // Caso contrario 
        // Envio un error de auth
        const token = req.headers['token']
        
        try {
            const verifyToken = jwt.verify(token, SECRET)
            if(verifyToken.id){
                next()
            } else {
                res.status(401).send({
                    error: "Usuario no autorizado"
                })
            }
        } catch (e){
            res.status(401).send({
                error: "Usuario no autorizado"
            })
        }
    }
}
module.exports = Middleware