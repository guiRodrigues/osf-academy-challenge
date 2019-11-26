const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const expressLayoutes = require('express-ejs-layouts');
const mongoose = require('mongoose');
const { mongoDB } = require('../config');
// const errorHandler = require('errorhandler');

const config = require('../config');
const routes = require('./routes');

/*
 *  TODO search for imports and exports
 *  TODO implement error handler
 *  TODO search for youch for error handling
 * */

class Server {
  constructor() {
    this.server = express();
  }

  create() {
    // Server settings
    this.server.set('env', process.env.NODE_ENV || 'local');
    this.server.set('port', config.port);
    this.server.set('host', config.host);
    this.server.set('views', path.resolve(__dirname, '..', 'app', 'views'));

    // setup view engine
    this.server.set('view engine', 'ejs');

    this.server.use(expressLayoutes);

    // serve favicon
    this.server.use(favicon(path.resolve(__dirname, '../public/favicon.ico')));

    // log requests
    this.server.use(logger('tiny'));

    // middleware that parses JSON
    this.server.use(bodyParser.json());

    // lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
    this.server.use(methodOverride());

    // need cookieParser middleware before we can do anything with cookies
    this.server.use(cookieParser(config.cookieParser));

    // serve static files
    this.server.use(express.static(path.resolve(__dirname, '..', 'public')));

    mongoose.connect(
      `mongodb+srv://${mongoDB.username}:${mongoDB.password}@cluster0-fvn5s.mongodb.net/${mongoDB.databaseName}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );

    // Set up routes
    routes.init(this.server);
  }

  start() {
    const host = this.server.get('host');
    const port = this.server.get('port');
    this.server.listen(port, () => {
      console.log(`Express server listening on - http://${host}:${port}`);
    });
  }

  errorHandler() {
    this.server.use((err, req, res, next) => {
      return res.render('error', {
        message: err.err.message,
        category: err.err.category,
      });
    });
  }
}

module.exports = new Server();
