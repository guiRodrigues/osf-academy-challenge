const express = require('express');
const helloController = require('../controllers/helloController');

const router = express.Router();

router.use('/', helloController.categories);

module.exports = router;
