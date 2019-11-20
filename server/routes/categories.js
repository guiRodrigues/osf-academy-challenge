const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const productsController = require('../controllers/productsController');

// const productsRoute = require('./products');

const router = express.Router();

router.get('/:category', categoriesController.list);

router.get('/:category/:subcategory', productsController.list);

module.exports = router;
