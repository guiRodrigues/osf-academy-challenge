const Product = require('../models/product/product');

async function index(req, res, next) {
  const { category, id } = req.params;

  // FRONT-END
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

        const resizedDescription =
          product.short_description.length > 100
            ? `${product.short_description.substring(0, 96)} ...`
            : product.short_description;

        return {
          name: product.name,
          id: product.id,
          short_description: resizedDescription,
          price: product.price,
          image: {
            link: images[0].link,
            alt: images[0].alt,
            title: images[0].title,
          },
        };
      });

      const productsIndexes =
        Math.ceil(products.total / paginateOptions.limit) + 1;

      res.render('products', {
        category,
        products: response,
        productsIndexes,
        actualPage: page,
      });
    }
  );
}

async function show(req, res, next) {
  const { category, productId } = req.params;

  const product = await Product.findOne({ id: productId });

  if (!product) {
    const err = new Error('Product not found');
    err.statusCode = 404;
    return next({ err, payload: { category } });
  }

  const {
    name,
    page_description,
    price,
    image_groups,
    long_description,
  } = product;

  const images = {
    large: image_groups.find(imgs => imgs.view_type === 'large').images,
    small: image_groups.find(imgs => imgs.view_type === 'small').images,
  };

  return res.render('product', {
    category,
    product: {
      name,
      page_description,
      price,
      long_description,
      images,
    },
  });
}

module.exports = {
  index,
  show,
};
