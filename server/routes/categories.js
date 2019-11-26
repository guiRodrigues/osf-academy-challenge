const express = require('express');

const CategoriesController = require('../controllers/categoryController');
const SubCategoryController = require('../controllers/subCategoryController');
const ProductController = require('../controllers/productController');

const router = express.Router();

router.get('/:category', CategoriesController.index);

router.get('/:category/:subcategory', SubCategoryController.index);

router.get('/:category/:subcategory/:id', ProductController.index);

router.get('/:category/:subcategory/:id/:productId', ProductController.show);

module.exports = router;
