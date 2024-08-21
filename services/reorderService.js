const Reorder = require('../models/Reorder');

const getReorders = async () => {
  return await Reorder.find();
};

const createReorder = async (reorderData) => {
  const newReorder = new Reorder(reorderData);
  return await newReorder.save();
};

const deleteReorder = async (id) => {
  return await Reorder.findByIdAndDelete(id);
};

module.exports = {
  getReorders,
  createReorder,
  deleteReorder,
};
