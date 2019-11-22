const mongoose = require('mongoose');

const VariationItem = require('./variation_item');

const VariationValue = new mongoose.Schema({
  variations: [VariationItem],
});

module.exports = VariationValue;
