const mongoose = require('mongoose');

const fabricSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  totalFabric: { type: String, required: true },
  fabricType: { type: String, required: true },
  quantity: { type: Number, required: true },
  quantityUsed: { type: Number, required: true },
  leftover: { type: Number, required: true },
  designs: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Fabric = mongoose.model('Fabric', fabricSchema);

module.exports = Fabric;


