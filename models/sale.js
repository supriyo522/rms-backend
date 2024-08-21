const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  workExperience: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;
