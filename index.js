// Version vieja const express = require('express');
import express from 'express';
import router from './routers/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config()
console.log(process.env.DB_HOST)

const app = express();

// Conectar base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar pug
app.set('view engine', 'pug');

// Middelware Obtener el año actual next panda al siguiete middleware
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    return next(); //Obliga pasar al siguiente
});

// Agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


// Definir la carpeta public
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen( port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})