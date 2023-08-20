const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongoURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
