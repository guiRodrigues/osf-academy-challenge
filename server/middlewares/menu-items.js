const Category = require('../models/category/mainCategory');

module.exports = (req, res, next) => {
  const categories = Category.find({}).then(catgs =>
    catgs.map(catg => ({ categoryId: catg.id, categoryName: catg.name }))
  );

  req.categories = categories;

  return next();
};
