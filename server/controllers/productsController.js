const _ = require('underscore');

const { getDB } = require('../../database');

function list(req, res) {
  const { category, subcategory } = req.params;

  // getDB().collection('categories').find().toArray()

  getDB()
    .collection('products')
    .find({ primary_category_id: { $regex: `.*${subcategory}.*` } })
    .toArray((error, items) => {
      res.render('subcategoryProducts', {
        _,
        title: 'Clothes & Smiles',
        items,
        category,
      });
    });
}

module.exports = {
  list,
};
