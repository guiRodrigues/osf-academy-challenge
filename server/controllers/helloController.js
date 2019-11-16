const _ = require('underscore');
const mongodb = require('mongodb');

function categories(req, res) {
  const mdbClient = mongodb.MongoClient;

  mdbClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('shop');
    db.collection('categories')
      .find()
      .toArray((error, items) => {
        res.render('hello', {
          // Underscore.js lib
          _,
          // Template data
          title: 'Hello World!',
          items,
        });

        client.close();
      });
    console.log(db);
  });
}

module.exports = {
  categories,
};
