const mongoose = require('mongoose');

const Category = require('./category');

const MainCategorySchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    page_description: String,
    page_title: String,
    categories: [Category],
  },
  {
    collection: 'categories',
  }
);

module.exports = mongoose.model('Category', MainCategorySchema);
