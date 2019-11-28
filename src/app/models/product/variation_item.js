const mongoose = require('mongoose');

const VariationItem = new mongoose.Schema({
  orderable: Boolean,
  name: String,
  value: String,
});

module.exports = VariationItem;
