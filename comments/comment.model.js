module.exports = function Comment(commentData) {
  this._id = null;
  this.text = null;
  this.addDate = new Date();

  if (commentData) {
    if (commentData._id) this._id = commentData._id;
    if (commentData.text) this.text = commentData.text;
    if (commentData.addDate) this.addDate = new Date(commentData.addDate);
  }
};
