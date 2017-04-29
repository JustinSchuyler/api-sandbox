let db = require('../shared/db').connection;

let api = {};

api.getComments = _ => {
  let comments = db.collection('comments'),
      cursor = comments.find();

  return cursor.toArray();
};

module.exports = api;
