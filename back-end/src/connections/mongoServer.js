require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
let db = null;
const { MONGO_DB_URL } = process.env;

const connection = () => (
  db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then(
      (conn) => {
        db = conn.db('model_example');
        return db;
      },
    )
);

module.exports = connection;