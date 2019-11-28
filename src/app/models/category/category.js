const mongoose = require('mongoose');
const subCategory = require('./subCategory');

const CategorySchema = new mongoose.Schema({
  id: String,
  image: String,
  name: String,
  page_description: String,
  page_title: String,
  parent_category_id: String,
  categories: [subCategory],
});

module.exports = CategorySchema;
