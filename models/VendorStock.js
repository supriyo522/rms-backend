const mongoose = require('mongoose');

const vendorStockSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  address: { type: String, required: true },
  orderDate: { type: Date, required: true },
  receivingDate: { type: Date, required: true },
  quantity: { type: Number, required: true },
  stockInHand: { type: Number, required: true },
  itemName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const VendorStock = mongoose.model('VendorStock', vendorStockSchema);

module.exports = VendorStock;
