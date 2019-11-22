const _ = require('underscore');

const Category = require('../models/category/mainCategory');

async function list(req, res) {
  const { category, subcategory } = req.params;

  const subcategoryInfo = {
    name: '',
    info: '',
  };

  // get categories
  const categories = await Category.find({}).then(cats =>
    cats.map(cat => ({ categoryId: cat.id, categoryName: cat.name }))
  );

  Category.findOne({ id: category }).then(item => {
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

    res.render('subcategories', {
      _,
      title: 'Clothes & Smiles',
      categories,
      category,
      subcategoryInfo,
      item: t,
    });
  });
}

module.exports = {
  list,
};
