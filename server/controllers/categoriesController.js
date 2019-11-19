const _ = require('underscore');

const { getDB } = require('../../database');

function list(req, res) {
  const { category } = req.params;

  getDB()
    .collection('categories')
    .find()
    .toArray((error, items) => {
      res.render('categories', {
        _,
        title: 'Clothes & Smiles',
        category,
        items,
      });
    });
}

module.exports = {
  list,
};
