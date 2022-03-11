const express = require('express')
const app = express()
const port = 3000
const {suma, resta} = require('./services/calculadora.service')
// const Calculadora = require('./services/calculadora.service')

app.get('/', (req, res) => {
  const numTotal = suma(1,2)

  res.send({respuesta: 'Hello World! suma: ' + numTotal + ' resta: ' + resta(1,1)})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})