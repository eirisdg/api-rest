'use strict'

// Importado de librerías
const express = require('express');
const bodyParser = require('body-parser');

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

})

app.get('', function(req, res) {

})

// INICIO DE SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriendo sobre el puerto ${port}`);
})
