// const express = require('express');
// const router = express.Router();
// const Purchase = require('../models/Purchase');
// const { format } = require('date-fns');

// router.post('/savePurchase', async (req, res) => {
//   const purchaseData = req.body.data;
//   console.log('Received purchase data:', purchaseData);

//   try {
//     const purchases = purchaseData.map(item => {
      
//       let purchase = {};
//       if (item['Bill Date']) purchase.billDate = new Date(item['Bill Date']);
//       if (item['Store']) purchase.store = item.Store;
//       if (item['Terminal No.']) purchase.terminalNo = item['Terminal No.'];
//       if (item['DIVISION']) purchase.division = item.DIVISION;
//       if (item['SECTION']) purchase.section = item.SECTION;
//       if (item['DEPARTMENT']) purchase.department = item.DEPARTMENT;
//       if (item['Item Code']) purchase.itemCode = item['Item Code'];
//       if (item['Cat-1 (Design No.)']) purchase.cat1 = item['Cat-1 (Design No.)'];
//       if (item['Cat-2 (Brand)']) purchase.cat2 = parseInt(item['Cat-2 (Brand)']) || null;
//       if (item['Cat-3 (Style)']) purchase.cat3 = item['Cat-3 (Style)'];
//       if (item['Cat-4 (Plane, F/S, H/S)'] !== "-") purchase.cat4 = parseInt(item['Cat-4 (Plane, F/S, H/S)']) || null;
//       if (item['Cat-5 (Size)']) purchase.cat5 = item['Cat-5 (Size)'];
//       if (item['IsVoid']) purchase.isVoid = item.IsVoid;
//       if (item['Barcode']) purchase.barcode = item.Barcode;
//       if (item['VENDOR']) purchase.vendor = item.VENDOR;
//       if (item['Ageing']) purchase.ageing = item.Ageing;
//       if (item['Tax Description']) purchase.taxDescription = item['Tax Description'];
//       if (item['Tax Rate']) purchase.taxRate = item['Tax Rate'];
//       if (item['Taxable Sale']) purchase.taxableSale = item['Taxable Sale'];
//       if (item['Description']) purchase.description = item.Description;
//       if (item['Mrp']) purchase.mrp = item.Mrp;
//       if (item['RSP']) purchase.rsp = item.RSP;
//       if (item['Promo Type']) purchase.promoType = item['Promo Type'];
//       if (item['Promo Name']) purchase.promoName = item['Promo Name'];
//       if (item['Std Rate']) purchase.stdRate = item['Std Rate'];
//       if (item['Bill Qty']) purchase.billQty = item['Bill Qty'];
//       if (item['Gr Amt']) purchase.grAmt = item['Gr Amt'];
//       if (item['Promo Amt']) purchase.promoAmt = item['Promo Amt'];
//       if (item['Discount Amt']) purchase.discountAmt = item['Discount Amt'];
//       if (item['Disc Amt']) purchase.discAmt = item['Disc Amt'];
//       if (item['Net Amt']) purchase.netAmt = item['Net Amt'];
//       if (item['Sales Man Name']) purchase.salesManName = item['Sales Man Name'];
//       if (item['Sell Quantity']) purchase.sellQuantity = item['Sell Quantity'];
//       if (item['Final Score']) purchase.finalScore = item['Final Score'];
//       if (item['First Name']) purchase.firstName = item['First Name'];
//       if (item['Last Name']) purchase.lastName = item['Last Name'];
//       if (item['Gender']) purchase.gender = item['Gender'];
//       if (item['Country']) purchase.country = item['Country'];
//       if (item['Age']) purchase.age = item['Age'];
//       if (item['Date']) purchase.date = item['Date'];
//       if (item['Id']) purchase.id = item['Id'];
//       if(item['Closing QTY'])purchase.closingQTY=item['Closing QTY'];
//       if(item['Closing AMT'])purchase.closingAMT=item['Closing AMT'];
//         return purchase;
//     });
//     await Purchase.insertMany(purchases);
//     res.status(200).send({ message: 'Data saved successfully!' });
//   } catch (error) {
//     console.error('Error saving data to MongoDB:', error.message);
//     res.status(500).send({ message: 'Error saving data to MongoDB' });
//   }
// });

// router.get('/getPurchases', async (req, res) => {
//   try {
//     const purchases = await Purchase.find();
//     res.status(200).send(purchases);
//   } catch (error) {
//     console.error('Error fetching data from MongoDB:', error.message);
//     res.status(500).send({ message: 'Error fetching data from MongoDB' });
//   }
// });

// router.get('/getSalePersonPerform', async (req, res) => {
//     try {
//       const purchases = await Purchase.find({}, { _id: 0, billDate:1, salesManName: 1, sellQuantity: 1, finalScore:1, closingQTY:1 ,closingAMT:1 });
//       const formattedPurchases = purchases.map(purchase => ({
//         ...purchase._doc,
//         billDate: format(purchase.billDate, 'dd-MM-yyyy') // Format the date as DD-MM-YYYY
//       }));
  
//       res.status(200).send(formattedPurchases);
//     } catch (error) {
//       console.error('Error fetching data from MongoDB:', error.message);
//       res.status(500).send({ message: 'Error fetching data from MongoDB' });
//     }
//   });

//   router.get('/getSaleForcast', async (req, res) => {
//     try {
//       const { date } = req.query;
//     const query = date ? { billDate: new Date(date) } : {};
//       const purchases = await Purchase.find(query, { _id: 0, billDate:1, division: 1, section: 1, department: 1, itemCode: 1, vendor: 1 });
//       const formattedPurchases = purchases.map(purchase => ({
//         ...purchase._doc,
//         billDate: format(purchase.billDate, 'dd-MM-yyyy') // Format the date as DD-MM-YYYY
//       }));
  
//       res.status(200).send(formattedPurchases);
//     } catch (error) {
//       console.error('Error fetching data from MongoDB:', error.message);
//       res.status(500).send({ message: 'Error fetching data from MongoDB' });
//     }
//   });

//   router.get('/getStockAtGlance', async (req, res) => {
//     try {
//       const purchases = await Purchase.find({}, { _id: 0, billDate:1, division: 1, section: 1, department: 1, itemCode: 1, vendor: 1, barcode:1, ageing:1, cat1:1, rsp:1, closingQTY:1, closingAMT:1});
//       const formattedPurchases = purchases.map(purchase => ({
//         ...purchase._doc,
//         billDate: format(purchase.billDate, 'dd-MM-yyyy') // Format the date as DD-MM-YYYY
//       }));
  
//       res.status(200).send(formattedPurchases);
//     } catch (error) {
//       console.error('Error fetching data from MongoDB:', error.message);
//       res.status(500).send({ message: 'Error fetching data from MongoDB' });
//     }
//   });

// module.exports = router;
