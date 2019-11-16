const homeRoute = require('./home');
const helloRoute = require('./hello');

function init(server) {
  // server.get('*', (req, res, next) => {
  //   console.log(`Request was made to: ${req.originalUrl}`);
  //   return next();
  // });

  server.get('/', (req, res) => {
    res.redirect('/home');
  });

  server.use('/home', homeRoute);
  server.use('/hello', helloRoute);
}

module.exports = {
  init,
};
