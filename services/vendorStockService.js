const VendorStock = require('../models/VendorStock');

const getAllStocks = async () => {
  try {
    return await VendorStock.find();
  } catch (err) {
    throw new Error('Error fetching stocks');
  }
};

const createStock = async (data) => {
  try {
    const { vendorName, address, orderDate, receivingDate, quantity, stockInHand, itemName } = data;
    return await VendorStock.create({ vendorName, address, orderDate, receivingDate, quantity, stockInHand, itemName });
  } catch (err) {
    throw new Error('Error creating stock');
  }
};

const deleteStock = async (id) => {
  try {
    await VendorStock.findByIdAndDelete(id);
    return { message: 'Stock deleted' };
  } catch (err) {
    throw new Error('Error deleting stock');
  }
};

module.exports = {
  getAllStocks,
  createStock,
  deleteStock,
};
