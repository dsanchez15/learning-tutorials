var express = require('express');
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const productsRoutes = require('./routes/products')

// Configuración para interpretar json.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Configuración CORS
app.use(cors());

// COnfiguración a BD
mongoose
    .connect(
        "mongodb+srv://root:toor@cluster0.oxcqs.mongodb.net/ferromateriales?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Estamos conectados");
    });

// Definimos las rutas
app.use('/api/products', productsRoutes)

module.exports = app;