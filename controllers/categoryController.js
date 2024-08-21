const categoryService = require('../services/categoryService');

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
};
