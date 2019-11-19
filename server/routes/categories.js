const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

router.use('/:category', categoriesController.list);

module.exports = router;
