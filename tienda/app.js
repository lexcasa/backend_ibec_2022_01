const express       = require('express')
const bodyParser    = require('body-parser')
const app           = express()
const port          = 3000
const Producto      = require('./services/productos.service')

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send({hola: "mundo"})
})

app.get('/productos', async (req, res) => {
    const productos = await Producto.obtenerTodos()
    res.send({
        response: productos
    })
})

// Obtener un producto por ID
app.get('/productos/:id', async (req, res) => {
    const id = req.params.id
    const productos = await Producto.obtenerPorId(id)
    res.send({
        response: productos[0]
    })
})

// Buscador por nombre
app.post('/productos/buscar', async (req, res) => {
    const nombre  = req.body.nombre
    const resultado = await Producto.buscar(nombre)
    res.send({
        response: resultado
    })
})

app.post('/productos', async (req, res) => {
    const producto  = req.body
    const resultado = await Producto.nuevo(producto)
    res.send({
        response: resultado
    })
})

app.put('/productos', async (req, res) => {
    const producto  = req.body
    const resultado = await Producto.editar(producto)
    res.send({
        response: resultado
    })
})

app.delete('/productos/:id', async (req, res) => {
    const id  = req.params.id
    const resultado = await Producto.eliminar(id)
    res.send({
        response: resultado
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})