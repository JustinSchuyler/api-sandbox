let ObjectId = require('mongodb').ObjectID;

let api = {},
    db = require('../shared/db').connection,
    comments = db.collection('comments'),
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

api.getComment = (id) => {
  return (/[a-f0-9]{24}/.test(id))
    ? comments.findOne({_id: new ObjectId(id)})
    : Promise.resolve();
};

module.exports = api;
