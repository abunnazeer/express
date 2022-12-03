const express = require('express');
const router = express.Router();
//////////voting///////////////

const voteController = require('./../controllers/voteController');

router
  .route('/')
  .get(voteController.getAllVote)
  .post(voteController.createVote);

module.exports = router;
