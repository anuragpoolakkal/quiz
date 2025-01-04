const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nutrimind', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', quizRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});