const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products');

router.get("", ProductController.getProducts);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;