const sectionService = require('../services/sectionService');

const getSections = async (req, res) => {
  const sections = await sectionService.getAllSections();
  res.json(sections);
};

const addSection = async (req, res) => {
  // const newSection = await sectionService.createSection(req.body);
  // res.json(newSection);
  try {
    const newSection = await sectionService.createSection(req.body);
    res.json(newSection);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const DeleteSection = async (req, res) => {
  // await sectionService.deleteSection(req.params.id);
  // res.json({ message: 'Section deleted' });
  try {
    await sectionService.deleteSection(req.params.id);
    res.json({ message: 'Section deleted' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getSections,
  addSection,
  DeleteSection,
};
