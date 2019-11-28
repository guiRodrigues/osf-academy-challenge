const categoriesRoute = require('./categories');
const productsRoute = require('./products');
const menu = require('../app/middlewares/menu-items');

function init(server) {
  server.get('/', (req, res) => {
    res.redirect('/categories/womens');
  });

  server.use('/', menu);

  server.use('/categories', categoriesRoute);
  server.use('/products', productsRoute);
}

module.exports = {
  init,
};
