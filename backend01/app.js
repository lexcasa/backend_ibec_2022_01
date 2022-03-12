const express = require('express')
const app = express()
const port = 3000
const {suma, resta, divi} = require('./services/calculadora.service')
// const Calculadora = require('./services/calculadora.service')

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