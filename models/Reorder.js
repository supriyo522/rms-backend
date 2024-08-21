const mongoose = require('mongoose');

const reorderSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemNumber: { type: String, required: true },
  vendorName: { type: String, required: true },
  orderDate: { type: Date, required: true },
  logisticTime: { type: String, required: true },
  receivingDate: { type: Date, required: true },
  quantity: { type: Number, required: true },
  stock: { type: Number, required: true },
  reorderPoint: { type: Number, required: true },
});

module.exports = mongoose.model('Reorder', reorderSchema);
