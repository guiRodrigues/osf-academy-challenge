const mongoose = require('mongoose');

const Image = require('./image');

const ImageGroup = new mongoose.Schema({
  images: [Image],
  view_type: String,
});

module.exports = ImageGroup;
