const express = require('express')
const app = express()
const port = 3000

// Llamo el modulo de los servicios en el app.js
const Sumar = require('./services/sumar.service')

app.get('/', (req, res) => {
    res.send({response: "Hola mundo"})
})

app.get('/sumar-uno/:numero', (req, res) => {
    const numero = parseFloat(req.params.numero)
    const resultado = Sumar.sumaUno(numero)
    res.send({resultado: resultado})
})

app.listen(port, (req, res) => {
    console.log("listen port ::", port)
})