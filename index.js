'use strict'

const mongoose = require('mongoose')
const app = require('./app');
const config = require('./config');

// Conexión a base de datos e inicio de servidor
mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos ${err}`)
    }
    console.log('Conexión a la base de datos establecida')

    // INICIO DE SERVIDOR
    app.listen(config.port, () => {
        console.log(`Servidor corriendo sobre el puerto ${config.port}`);
    })
})
