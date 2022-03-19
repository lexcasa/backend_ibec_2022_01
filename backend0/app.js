const express = require('express')
const app     = express()
const port    = 3000
// Requerir el modulo entero
const Nombre  = require('./services/nombre.service')

/// Requerir la funcion
// const {obtenerApellido} = require('./services/nombre.service')
app.get('/', (req, res) => {
    res.send({success: "Hola mundo!"})
})

app.get('/nombre/:apellido', (req, res) => {
    const apellido  = req.params.apellido // url: /:nombre/:apellido -> req.params = {nombre: valor, apellido: valor2}
    const respuesta = Nombre.obtenerApellido(apellido)
    if(respuesta){
        res.send({nombre: respuesta})
    } else {
        res.send({error: "Nombre no encontrado"})
    }
})

app.listen(port, (req, res) => {
    console.log("listen :: ", port)
})