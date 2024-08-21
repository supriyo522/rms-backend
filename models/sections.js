const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  sectionName: String,
  parentDivision: String,
  addedBy: String,
  date: String,
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
