const Category = require('../models/category/mainCategory');

module.exports = (req, res, next) => {
  Category.find({}, (err, categories) => {
    if (err) {
      return next(err);
    }

    res.locals.categories = categories.map(category => ({
      categoryId: category.id,
      categoryName: category.name,
    }));

    return next();
  });
};
