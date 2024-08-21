const express = require('express');
const router = express.Router();
const reorderController = require('../controllers/reorderController');

router.get('/', reorderController.getReorders);
router.post('/', reorderController.createReorder);
router.delete('/:id', reorderController.deleteReorder);

module.exports = router;
