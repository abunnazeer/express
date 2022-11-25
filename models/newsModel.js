const mongoose = require('mongoose');

///News Database Schema
const newsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field is required'],
  },
  source: {
    type: String,
  },
  content: {
    type: String,
    required: [true, 'please add your news content'],
  },
  photo: {
    type: String,
  },
});

const News = mongoose.model('news', newsSchema);
module.exports = News;
