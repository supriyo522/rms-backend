const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');

router.get('/sections', sectionController.getSections);
router.post('/sections', sectionController.addSection);
router.delete('/sections/:id', sectionController.DeleteSection);

module.exports = router;
