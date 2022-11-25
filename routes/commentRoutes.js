const express = require('express');

const router = express.Router();

const CommentController = require('./../controllers/commentController');

router
  .route('/')
  .get(CommentController.getAllComments)
  .post(CommentController.createComment);
module.exports = router;
