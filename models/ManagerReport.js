// models/ManagerReport.js
const mongoose = require('mongoose');

const managerReportSchema = new mongoose.Schema({
  store: { type: String, required: true },
  division: { type: String, required: true },
  section: { type: String, required: true },
  department: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  targetAchieved: { type: Number, required: true },
  footfall: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const ManagerReport = mongoose.model('ManagerReport', managerReportSchema);

module.exports = ManagerReport;
