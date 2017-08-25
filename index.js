'use strict'

const mongoose = require('mongoose')
const app = require('./app');
const port = process.env.PORT || 3000

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
