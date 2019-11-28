const mongoose = require('mongoose');

const VariationAttributes = new mongoose.Schema({
  variation_value: {
    color: String,
    size: String,
  },
  price: Number,
  product_id: String,
  orderable: Boolean,
});

module.exports = VariationAttributes;
