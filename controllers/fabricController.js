const fabricService = require('../services/fabricService');

const getFabrics = async (req, res) => {
  try {
    const fabrics = await fabricService.getFabrics();
    res.json(fabrics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createFabric = async (req, res) => {
  try {
    const { vendorName, totalFabric, fabricType, quantity, quantityUsed, designs } = req.body;
    const leftover = quantity - quantityUsed; // Calculate leftover
    const newFabric = await fabricService.createFabric({ vendorName, totalFabric, fabricType, quantity, quantityUsed, leftover, designs });
    res.status(201).json(newFabric);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteFabric = async (req, res) => {
  try {
    await fabricService.deleteFabric(req.params.id);
    res.json({ message: 'Fabric deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getFabrics,
  createFabric,
  deleteFabric,
};
