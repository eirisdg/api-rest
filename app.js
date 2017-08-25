'use strict'

// Importado de librerías
const express = require('express');
const bodyParser = require('body-parser');


// Inicio de la app
const app = express()
const api = require('./routes')

// Configuración de bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app
