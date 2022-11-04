const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ocampoad:E4JEuVUqFzs9QvK@cluster0.ga9ahxg.mongodb.net/tictactoe?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
