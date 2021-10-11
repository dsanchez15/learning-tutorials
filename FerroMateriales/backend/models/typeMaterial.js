const mongoose = require("mongoose");

const categories = mongoose.Schema({
    material: { type: String },
});

module.exports = mongoose.model("categories", categories);