const Fabric = require('../models/Fabric');

const getFabrics = async () => {
  return await Fabric.find();
};

const createFabric = async (fabricData) => {
  const fabric = new Fabric(fabricData);
  return await fabric.save();
};

const deleteFabric = async (id) => {
  return await Fabric.findByIdAndDelete(id);
};

module.exports = {
  getFabrics,
  createFabric,
  deleteFabric,
};
