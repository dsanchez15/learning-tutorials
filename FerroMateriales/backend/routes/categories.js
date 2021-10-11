const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categoriesController');

router.get("", CategoriesController.getCategories);

module.exports = router;