const mongoose = require('mongoose');
require("dotenv").config();

// Connect to MongoDB using Mongoose
const connectToDB = async()=>{
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = connectToDB;