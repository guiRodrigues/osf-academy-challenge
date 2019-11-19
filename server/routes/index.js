const categoriesRoute = require('./categories');

function init(server) {
  server.get('/', (req, res) => {
    res.redirect('/categories/womens');
  });

  server.use('/categories', categoriesRoute);
}

module.exports = {
  init,
};
