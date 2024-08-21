const SellThrough = require('../models/SellThrough');

const getSellThroughData = async () => {
  return await SellThrough.find();
};

const createSellThrough = async (sellThroughData) => {
  const sellThrough = new SellThrough(sellThroughData);
  return await sellThrough.save();
};

const deleteSellThrough = async (id) => {
  return await SellThrough.findByIdAndDelete(id);
};

module.exports = {
  getSellThroughData,
  createSellThrough,
  deleteSellThrough,
};
