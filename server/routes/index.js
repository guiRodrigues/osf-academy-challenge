// const homeRoute = require('./home');
const categoriesRoute = require('./categories');

function init(server) {
  server.get('/', (req, res) => {
    res.redirect('/categories/womens');
  });

  server.use('/categories', categoriesRoute);
  // server.use('/hello', helloRoute);
}

module.exports = {
  init,
};
