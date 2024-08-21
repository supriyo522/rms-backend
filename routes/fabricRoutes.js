const express = require('express');
const router = express.Router();
const fabricController = require('../controllers/fabricController');

router.get('/', fabricController.getFabrics);
router.post('/', fabricController.createFabric);
router.delete('/:id', fabricController.deleteFabric);

module.exports = router;





