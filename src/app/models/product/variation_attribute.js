const mongoose = require('mongoose');

const VariationValues = require('./variation_values');

const VariationAttribute = new mongoose.Schema({
  values: [VariationValues],
  id: String,
  name: String,
});

module.exports = VariationAttribute;
