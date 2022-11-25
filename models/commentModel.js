const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  titleName: {
    type: String,
    required: [true, 'you must provide a name'],
  },
  commentContent: {
    type: String,
    required: [true, 'you must provide a position'],
  },
});

const Comments = mongoose.model('Comment', commentSchema);
module.exports = Comments;
