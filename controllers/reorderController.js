const reorderService = require('../services/reorderService');

const getReorders = async (req, res, next) => {
  try {
    const reorders = await reorderService.getReorders();
    res.json(reorders);
  } catch (err) {
    next(err);
  }
};

const createReorder = async (req, res, next) => {
  const reorderData = req.body;

  try {
    const newReorder = await reorderService.createReorder(reorderData);
    res.status(201).json(newReorder);
  } catch (err) {
    next(err);
  }
};

const deleteReorder = async (req, res, next) => {
  const { id } = req.params;

  try {
    await reorderService.deleteReorder(id);
    res.json({ message: 'Reorder deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getReorders,
  createReorder,
  deleteReorder,
};
