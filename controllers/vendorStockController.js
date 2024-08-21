const vendorStockService = require('../services/vendorStockService');

const getStocks = async (req, res) => {
  try {
    const stocks = await vendorStockService.getAllStocks();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createStock = async (req, res) => {
  try {
    const newStock = await vendorStockService.createStock(req.body);
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteStock = async (req, res) => {
  try {
    const result = await vendorStockService.deleteStock(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getStocks,
  createStock,
  deleteStock,
};
