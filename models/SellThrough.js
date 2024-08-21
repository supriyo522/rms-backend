const mongoose = require('mongoose');

const sellThroughSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  vendorName: { type: String, required: true },
  location: { type: String, required: true },
  quantityReceived: { type: Number, required: true },
  quantitySold: { type: Number, required: true },
  quantityStock: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const SellThrough = mongoose.model('SellThrough', sellThroughSchema);

module.exports = SellThrough;
