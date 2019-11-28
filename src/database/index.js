const mongoose = require('mongoose');
const { database } = require('../config');

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `mongodb+srv://${database.username}:${database.password}@cluster0-fvn5s.mongodb.net/${database.databaseName}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

module.exports = new Database();
