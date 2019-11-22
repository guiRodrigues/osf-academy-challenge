const express = require('express');

const CategoriesController = require('../controllers/categoryController');
const CubCategoryController = require('../controllers/subCategoryController');
const ProductController = require('../controllers/productController');

const router = express.Router();

router.get('/:category', CategoriesController.list);

router.get('/:category/:subcategory', CubCategoryController.list);

router.get('/:category/:subcategory/:id', ProductController.list);

module.exports = router;
