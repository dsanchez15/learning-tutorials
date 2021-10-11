const typeMaterial = require("../models/typeMaterial");

exports.getCategories = (req, res) => {
    typeMaterial.find().then((categoriesResult) => {
        res.status(200).json(categoriesResult);
    });
};