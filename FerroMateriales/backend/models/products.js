const mongoose = require("mongoose");

const producto = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: Number },
    cantidad: { type: Number },
    precio: { type: Number }
});

module.exports = mongoose.model("products", producto);