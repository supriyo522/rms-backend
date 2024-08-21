// controllers/managerReportController.js
const managerReportService = require('../services/managerReportService');

const getManagerReports = async (req, res) => {
  try {
    const reports = await managerReportService.getManagerReports();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createManagerReport = async (req, res) => {
  try {
    const { store, division, section, department, targetAmount, targetAchieved, footfall } = req.body;
    const newReport = await managerReportService.createManagerReport({ store, division, section, department, targetAmount, targetAchieved, footfall });
    res.status(201).json(newReport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteManagerReport = async (req, res) => {
  try {
    await managerReportService.deleteManagerReport(req.params.id);
    res.json({ message: 'Report deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getManagerReports,
  createManagerReport,
  deleteManagerReport,
};
