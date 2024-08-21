const Section = require('../models/sections');

const Purchase = require('../models/Purchase');

const getAllSections = async () => {
  return await Section.find();
};

const createSection = async (data) => {
  // const newSection = new Section(sectionData);
  // await newSection.save();
  // return newSection;
  const { sectionName, parentDivision, addedBy, date } = data;
  const newSection = new Section({ sectionName, parentDivision, addedBy, date });

  await newSection.save();

  const newPurchase = new Purchase({
    section: sectionName,
    division: parentDivision,
    date,
    addedBy
  });

  await newPurchase.save();

  return newSection;
};

const deleteSection = async (id) => {
  await Section.findByIdAndDelete(id);
};

module.exports = {
  getAllSections,
  createSection,
  deleteSection,
};
