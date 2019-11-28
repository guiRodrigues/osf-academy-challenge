const express = require('express');

const ProductController = require('../app/controllers/productController');

const router = express.Router();

router.get('/:primary_category/:productId', ProductController.show);

router.get('/:primary_category', ProductController.index);

module.exports = router;
