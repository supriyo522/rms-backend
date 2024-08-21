const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: String, required: true },
  addedBy: { type: String, required: true },
  date: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
