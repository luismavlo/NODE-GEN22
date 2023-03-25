//REQUERIMOS EXPRESS QUE ES UNA LIBRERIA
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productsRoutes = require('./routes/products.routes');

const app = express();

//1. MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

//2. ROUTES

app.use('/api/v1/products', productsRoutes);

//3. EXPORTS APP

module.exports = app;
