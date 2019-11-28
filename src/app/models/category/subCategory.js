const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  id: String,
  name: String,
  page_description: String,
  page_title: String,
  parent_category_id: String,
});

module.exports = SubCategorySchema;
