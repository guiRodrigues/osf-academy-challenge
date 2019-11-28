const express = require('express');

const CategoriesController = require('../app/controllers/categoryController');
const SubCategoryController = require('../app/controllers/subCategoryController');

const router = express.Router();

router.get('/:category', CategoriesController.index);

router.get('/:category/:subcategory', SubCategoryController.index);

module.exports = router;
