const mongoose = require('mongoose');


const connect = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
  });

  mongoose.connection.on('error', () => {
    console.error('Connection error. No Mongoose for you');
  });
}

module.exports = { connect };
