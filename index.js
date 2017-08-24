'use strict'

// Importado de librerías
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Inicio de la app
const app = express()
const port = process.env.PORT || 3000

// Configuración de bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// ENDPOINTS
// Petición a la url "hola"
// app.get('/hola', (req, res) => {
//     res.send({message: 'Hola mundo!'})
// })
// // Petición con parámetros
// app.get('/hola/:name', (req, res) => {
//     res.send({message: `Hola ${req.params.name}!`})
// })

app.get('/api/product', (req, res) => {
    res.status(200).send({products: []})
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'El producto se ha recibido.'})
})

app.put('/put/product/:productId', (req, res) => {

})

app.delete('/put/product/:productId', (req, res) => {

})


// Conexión a base de datos e inicio de servidor
mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos ${err}`)
    }
    console.log('Conexión a la base de datos establecida')

    // INICIO DE SERVIDOR
    app.listen(port, () => {
        console.log(`Servidor corriendo sobre el puerto ${port}`);
    })
})
