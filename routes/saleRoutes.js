const express = require('express');
const router = express.Router();
const salesController = require('../controllers/saleController');

router.get('/', salesController.getAllSales);
router.post('/', salesController.createSales);
router.delete('/:id', salesController.deleteSales);

module.exports = router;