
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pushups: {
    type: Number,
    required: true,
    min: 10,
    max: 25
  },
  situps: {
    type: Number,
    required: true,
    min: 20,
    max: 40
  },
  burpees: {
    type: Number,
    required: true,
    min: 5,
    max: 10
  }
});

module.exports = mongoose.model('Color', schema);