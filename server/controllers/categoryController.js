const _ = require('underscore');

const Category = require('../models/category/mainCategory');

async function list(req, res) {
  const { category } = req.params;

  const categories = await req.categories.then(resp => resp);

  Category.findOne({ id: category }).then(item => {
    res.render('categories', {
      _,
      title: 'Clothes & Smiles',
      categories,
      category,
      item,
    });
  });
}

module.exports = {
  list,
};
