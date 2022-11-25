const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input you full name'],
    unique: true,
  },
  position: {
    type: String,
    required: [true, 'Please your position is required'],
  },
  photo: {
    type: String,
    required: [true, 'You must upload an image yourself'],
  },
  vote: {
    type: [],
  },
});

const Candidates = mongoose.model('candidate', candidateSchema);
module.exports = Candidates;
