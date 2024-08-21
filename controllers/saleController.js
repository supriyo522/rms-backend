const salesService = require('../services/saleService');

const getAllSales = async (req, res) => {
  try {
    const sales = await salesService.getAllSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSales = async (req, res) => {
  try {
    const sales = await salesService.createSales(req.body);
    res.status(201).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSales = async (req, res) => {
  try {
    const sales = await salesService.deleteSales(req.params.id);
    if (!sales) {
      return res.status(404).json({ message: 'Sales not found' });
    }
    res.status(200).json({ message: 'Sales deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSales,
  createSales,
  deleteSales,
};
