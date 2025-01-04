const Attempt = require('../models/Attempt');

exports.getPreviousAttempt = async (req, res) => {
  try {
    const attempt = await Attempt.findOne({ quizId: req.params.quizId })
      .sort({ createdAt: -1 });
    res.json(attempt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.submitAttempt = async (req, res) => {
  const attempt = new Attempt({
    quizId: req.body.quizId,
    answers: req.body.answers,
  });

  try {
    const newAttempt = await attempt.save();
    res.status(201).json(newAttempt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.resetQuiz = async (req, res) => {
  try {
    await Attempt.deleteMany({ quizId: req.params.quizId });
    res.json({ message: 'Quiz reset successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};