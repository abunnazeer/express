const Comments = require('./../models/commentModel');
exports.getAllComments = async (reg, res) => {
  const comments = await Comments.find();

  res.status(200).render('comment', { comments: comments });
};
exports.createComment = (reg, res) => {
  const commentPost = new Comments({
    titleName: reg.body.titlename,
    commentContent: reg.body.comment,
  });

  commentPost
    .save()
    .then(doc => {
      console.log(doc);
    })
    .catch(err => {
      console.log('Error', err);
    });

  res.redirect('/comment');
};
