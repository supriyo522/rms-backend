const express = require('express');
const router = express.Router();
const vendorStockController = require('../controllers/vendorStockController');

router.get('/', vendorStockController.getStocks);
router.post('/', vendorStockController.createStock);
router.delete('/:id', vendorStockController.deleteStock);

module.exports = router;
