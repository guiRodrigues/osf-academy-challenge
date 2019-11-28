const mongoose = require('mongoose');

const Image = new mongoose.Schema({
  alt: String,
  link: String,
  title: String,
});

module.exports = Image;
