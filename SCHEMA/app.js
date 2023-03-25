const express = require('express');
const morgan = require('morgan');

//importar rutas
const pokemonsRoutes = require('./routes/pokemons.routes');

//instanciar la aplicación de express
const app = express();

//1. middlewares
app.use(morgan('dev'));
app.use(express.json());

//2. routes
app.use('/api/v1/pokemons', pokemonsRoutes);

module.exports = app;
