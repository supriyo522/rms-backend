// routes/managerReportRoutes.js
const express = require('express');
const router = express.Router();
const managerReportController = require('../controllers/managerReportController');

router.get('/manager-reports', managerReportController.getManagerReports);
router.post('/manager-reports', managerReportController.createManagerReport);
router.delete('/manager-reports/:id', managerReportController.deleteManagerReport);

module.exports = router;
