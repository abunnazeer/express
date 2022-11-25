const express = require('express');

const router = express.Router();

const newsController = require('./../controllers/newsController');

router
  .route('/')
  .get(newsController.getAllNews)
  .post(newsController.createNews);
module.exports = router;
