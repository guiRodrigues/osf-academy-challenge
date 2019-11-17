const mongoClient = require('mongodb').MongoClient;
const { mongoDB } = require('../config');

const mongoURL = `mongodb+srv://${mongoDB.username}:${mongoDB.password}@cluster0-fvn5s.mongodb.net/${mongoDB.databaseName}?retryWrites=true&w=majority`;
let mongodb;

function initDB(callback) {
  mongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, db) => {
    if (err) {
      return callback(err);
    }
    mongodb = db.db('e-commerce');
    return callback(null, mongodb);
  });
}

function getDB() {
  return mongodb;
}

function closeDB() {
  mongodb.close();
}

module.exports = {
  initDB,
  getDB,
  closeDB,
};
