const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGO_DB)

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_DB}.mongodb.net/tictactoe?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
