const express = require('express')
const app = express()
const port = 3000

// Llamo el modulo de los servicios en el app.js
const Sumar     = require('./services/sumar.service')
const Restar    = require('./services/restar.service')
const Saludo    = require('./services/saludo.service')

app.get('/', (req, res) => {
    res.send({response: "Hola mundo"})
})

app.get('/sumar-uno/:numero', (req, res) => {
    const numero = parseFloat(req.params.numero)
    const resultado = Sumar.sumaUno(numero)
    res.send({resultado: resultado})
})

app.get('/restar-cinco/:numero', (req, res) => {
    const numero = parseFloat(req.params.numero)
    const resultado = Restar.restarCinco(numero)
    res.send({resultado: resultado})
})

app.get('/saludo/:nombre', (req, res) => {
    const nombre    = req.params.nombre
    const resultado = Saludo.saludar(nombre)
    res.send({resultado: resultado})
})

app.listen(port, (req, res) => {
    console.log("listen port ::", port)
})