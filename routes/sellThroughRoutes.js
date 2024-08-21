const express = require('express');
const router = express.Router();
const sellThroughController = require('../controllers/sellThroughController');

router.get('/', sellThroughController.getSellThroughData);
router.post('/', sellThroughController.createSellThrough);
router.delete('/:id', sellThroughController.deleteSellThrough);

module.exports = router;
