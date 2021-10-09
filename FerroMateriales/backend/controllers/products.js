const Producto = require("../models/products");

exports.getProducts = (req, res) => {
    Producto.find().then((productoResult) => {
        res.status(200).json(productoResult);
    });
};