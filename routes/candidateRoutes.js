const express = require('express');

const router = express.Router();

const CandidateController = require('./../controllers/candidateController');

router
  .route('/')
  .get(CandidateController.getAllCandidate)
  .post(CandidateController.createCandidate);
module.exports = router;
