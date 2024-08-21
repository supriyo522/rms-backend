const sellThroughService = require('../services/sellThroughService');

const getSellThroughData = async (req, res) => {
  try {
    const sellThroughData = await sellThroughService.getSellThroughData();
    res.json(sellThroughData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSellThrough = async (req, res) => {
  try {
    const { itemName, vendorName, location, quantityReceived, quantitySold, quantityStock } = req.body;
    const newSellThrough = await sellThroughService.createSellThrough({ itemName, vendorName, location, quantityReceived, quantitySold, quantityStock });
    res.status(201).json(newSellThrough);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteSellThrough = async (req, res) => {
  try {
    await sellThroughService.deleteSellThrough(req.params.id);
    res.json({ message: 'Sell Through data deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getSellThroughData,
  createSellThrough,
  deleteSellThrough,
};
