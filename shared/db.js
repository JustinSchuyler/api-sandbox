let mongo = require('mongodb').MongoClient;

let api = {
  connection: null
};

api.connect = (url, dbname) => {
  return mongo.connect(url + dbname)
    .then(connection => {
      api.connection = connection;
    });
};

module.exports = api;
