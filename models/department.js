// backend/models/department.js
const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: String, required: true },
  addedBy: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Department', DepartmentSchema);
