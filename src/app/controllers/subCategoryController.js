const Category = require('../models/category/mainCategory');

async function index(req, res, next) {
  const { category, subcategory } = req.params;

  const subcategoryInfo = {
    name: '',
    info: '',
  };

  Category.findOne({ id: category }).then(item => {
    if (!item) {
      const err = new Error('Category not found');
      err.statusCode = 404;
      return next({ err, payload: { category } });
    }

    const subSubCategories = item.categories.map(sub => {
      if (sub.id === subcategory) {
        subcategoryInfo.name = sub.name;
        subcategoryInfo.info = sub.page_title;
      }
      return sub.categories.filter(
        subsub => subsub.parent_category_id === subcategory
      );
    });

    // removing empty arrays
    const filteredResult = subSubCategories.find(e => e.length);

    // transforming to JSON
    const t = filteredResult.map(obj => obj.toJSON());

    return res.render('subcategories', {
      category,
      subcategoryInfo,
      item: t,
    });
  });
}

module.exports = {
  index,
};
