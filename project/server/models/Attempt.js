const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  quizId: {
    type: Number,
    required: true,
  },
  answers: {
    type: Map,
    of: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Attempt', AttemptSchema);