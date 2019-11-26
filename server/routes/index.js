const categoriesRoute = require('./categories');
const menu = require('../middlewares/menu-items');

function init(server) {
  server.get('/', (req, res) => {
    res.redirect('womens');
  });

  server.use('/', menu);

  server.use(categoriesRoute);
}

module.exports = {
  init,
};
