const _ = require('underscore');

const { getDB } = require('../../database');

function categories(req, res) {
  getDB()
    .collection('categories')
    .find()
    .toArray((error, items) => {
      res.render('hello', {
        _,
        title: 'Hello World!',
        items,
      });
    });
}

module.exports = {
  categories,
};
