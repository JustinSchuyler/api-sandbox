let db = require('../shared/db').connection,
    comments = db.collection('comments');

let api = {},
    Comment = require('./comment.model');

api.getComments = _ => {
  let cursor = comments.find();

  return cursor.toArray();
};

api.createComment = (commentData) => {
  let comment = new Comment(commentData);

  return comments.insertOne(comment)
    .then(result => result.ops[0]);
};

module.exports = api;
