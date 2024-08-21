const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.post('/savePurchase', purchaseController.savePurchase);
router.get('/getPurchases', purchaseController.getPurchases);
router.get('/getSalePersonPerform', purchaseController.getSalePersonPerform);
router.get('/getSaleForcast', purchaseController.getSaleForcast);
router.get('/getStockAtGlance', purchaseController.getStockAtGlance);

module.exports = router;
