const Category = require('../models/category');

const getCategories = async () => {
  return await Category.find();
};

const createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  return await category.save();
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
};
