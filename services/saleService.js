const Sales = require('../models/sale');

const getAllSales = async () => {
  return await Sales.find();
};

const getSalesById = async (id) => {
  return await Sales.findById(id);
};

const createSales = async (data) => {
  const sales = new Sales(data);
  return await sales.save();
};

const deleteSales = async (id) => {
  return await Sales.findByIdAndDelete(id);
};

module.exports = {
  getAllSales,
  getSalesById,
  createSales,
  deleteSales,
};


