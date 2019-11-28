const Category = require('../models/category/mainCategory');

function index(req, res, next) {
  const { category } = req.params;

  Category.findOne({ id: category }).then(item => {
    if (!item) {
      const err = new Error('Category not found');
      err.statusCode = 404;
      return next({ err, payload: { category } });
    }

    return res.render('categories', {
      category,
      item,
    });
  });
}

module.exports = {
  index,
};
