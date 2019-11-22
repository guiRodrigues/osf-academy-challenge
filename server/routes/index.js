const categoriesRoute = require('./categories');

function init(server) {
  server.get('/', (req, res) => {
    res.redirect('/womens');
  });

  server.use('/', categoriesRoute);
}

module.exports = {
  init,
};
