const express = require('express');

const ProductController = require('../controllers/productController');

const router = express.Router();

router.get('/:category/:subcategory/:id', ProductController.list);

module.exports = router;
