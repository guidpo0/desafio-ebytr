require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
let collection = null;
const { MONGO_DB_URL } = process.env;

const connection = () => (
  collection
    ? Promise.resolve(collection)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then(
      (conn) => conn.db('ebytr'),
    ).then(
      (db) => {
        collection = db.collection('users');
        return collection;
      },
    )
);

module.exports = connection;
