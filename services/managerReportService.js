// services/managerReportService.js
const ManagerReport = require('../models/ManagerReport');

const getManagerReports = async () => {
  return await ManagerReport.find();
};

const createManagerReport = async (reportData) => {
  const report = new ManagerReport(reportData);
  return await report.save();
};

const deleteManagerReport = async (id) => {
  return await ManagerReport.findByIdAndDelete(id);
};

module.exports = {
  getManagerReports,
  createManagerReport,
  deleteManagerReport,
};
