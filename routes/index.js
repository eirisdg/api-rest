'use strict'

// Importado de librerías
const express = require('express')
const productController = require('../controllers/product');
const api = express.Router()
const auth = require('../middlewares/auth');
const userController = require('../controllers/user');

// Rutas
api.get('/products', productController.getProducts)
api.get('/product/:productId', productController.getProduct)
api.post('/product', productController.saveProduct)
api.put('/product/:productId', productController.updateProduct)
api.delete('/product/:productId', productController.deleteProduct)
api.post('/signup', userController.signUp)
api.post('/signin', userController.signIn)
api.get('/private', auth, function(req, res) {
    res.status(200).send({message: `Tienes acceso`})
})


module.exports = api
