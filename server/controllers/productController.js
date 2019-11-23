const _ = require('underscore');

const Product = require('../models/product/product');

async function list(req, res) {
  const { category, id } = req.params;

  // const formatter = new Intl.NumberFormat('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  //   minimumIntegerDigits: 2,
  //   maximumFractionDigits: 2,
  // });

  const { page = 1 } = req.query;

  const paginateOptions = {
    limit: 20,
    page,
  };

  Product.paginate({ primary_category_id: id }, paginateOptions).then(
    async products => {
      const response = products.docs.map(product => {
        const { images } = product.image_groups.find(
          image_group => image_group.view_type === 'medium'
        );

        return {
          name: product.name,
          short_description: product.short_description,
          price: product.price,
          image: images[0].link,
        };
      });

      const productsIndexes =
        Math.ceil(products.total / paginateOptions.limit) + 1;

      const categories = await req.categories.then(resp => resp);

      res.render('products', {
        _,
        title: 'Clothes & Smiles',
        categories,
        category,
        products: response,
        productsIndexes,
        actualPage: page,
      });
    }
  );
}

module.exports = {
  list,
};
