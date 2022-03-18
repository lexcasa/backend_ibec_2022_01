const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const {suma, resta, divi, multi} = require('./services/calculadora.service')
// const Calculadora = require('./services/calculadora.service')

app.use(bodyParser.json())
app.get('/', (req, res) => {
  const numTotal = suma(1,2)

  res.send({respuesta: 'Hello World! suma: ' + numTotal + ' resta: ' + resta(1,1)})
})

// Resta
app.get('/resta/:a/:b', (req, res) => {
  const a = req.params.a
  const b = req.params.b

  const numTotal = resta(a,b)

  res.send({resultado: numTotal})
})

// Suma
app.post('/suma', (req, res) => {
    console.log("que llega del post :: ", req.body)
    const payload   = req.body
    const numTotal  = suma(payload.a, payload.b)

    res.send({resultado: numTotal})
})

// Multiplicacion
app.put('/multi', (req, res) => {
    const payload   = req.body
    const numTotal  = multi(payload.a, payload.b)

    res.send({resultado: numTotal})
})

// Division
app.delete('/divi/:a/:b', (req, res) => {
  const a = req.params.a
  const b = req.params.b

  const numTotal = divi(a,b)

  res.send({resultado: numTotal})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})