// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const port = 5000;

// app.use(express.json({ limit: '100mb' }));
// // app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/purchases', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// const purchaseSchema = new mongoose.Schema({
//   billDate: Date,
//   store: String,
//   terminalNo: String,
//   division: String,
//   section: String,
//   department: String,
//   itemCode: String,
//   cat1: String,
//   cat2: Number,
//   cat3: String,
//   cat4: Number,
//   cat5: String,
//   isVoid: String,
//   barcode: String,
//   vendor: String,
//   ageing: String,
//   taxDescription: String,
//   taxRate: Number,
//   taxableSale: Number,
//   description: String,
//   mrp: Number,
//   rsp: Number,
//   promoType: String,
//   promoName: String,
//   stdRate: Number,
//   billQty: Number,
//   grAmt: Number,
//   promoAmt: Number,
//   discountAmt: Number,
//   discAmt: Number,
//   netAmt: Number,
// });

// const Purchase = mongoose.model('Purchase', purchaseSchema);

// app.post('/api/savePurchase', async (req, res) => {
//   const purchaseData = req.body.data;
//   console.log('Received purchase data:', purchaseData);

//   try {
//     await Purchase.insertMany(purchaseData.map(item => ({
//       billDate: new Date(item['Bill Date']),
//       store: item.Store,
//       terminalNo: item['Terminal No.'],
//       division: item.DIVISION,
//       section: item.SECTION,
//       department: item.DEPARTMENT,
//       itemCode: item['Item Code'],
//       cat1: item['Cat-1 (Design No.)'],
//       cat2: parseInt(item['Cat-2 (Brand)']) || null,
//       cat3: item['Cat-3 (Style)'],
//       cat4: item['Cat-4 (Plane, F/S, H/S)'] !== "-" ? parseInt(item['Cat-4 (Plane, F/S, H/S)']) || null : null,
//       cat5: item['Cat-5 (Size)'],
//       isVoid: item.IsVoid,
//       barcode: item.Barcode,
//       vendor: item.VENDOR,
//       ageing: item.Ageing,
//       taxDescription: item['Tax Description'],
//       taxRate: item['Tax Rate'],
//       taxableSale: item['Taxable Sale'],
//       description: item.Description,
//       mrp: item.Mrp,
//       rsp: item.RSP,
//       promoType: item['Promo Type'],
//       promoName: item['Promo Name'],
//       stdRate: item['Std Rate'],
//       billQty: item['Bill Qty'],
//       grAmt: item['Gr Amt'],
//       promoAmt: item['Promo Amt'],
//       discountAmt: item['Discount Amt'],
//       discAmt: item['Disc Amt'],
//       netAmt: item['Net Amt']
//     })));
//     res.status(200).send({ message: 'Data saved successfully!' });
//   } catch (error) {
//     console.error('Error saving data to MongoDB:', error);
//     res.status(500).send({ message: 'Error saving data to MongoDB' });
//   }
// });

// app.get('/api/getPurchases', async (req, res) => {
//   try {
//     const purchases = await Purchase.find();
//     res.status(200).send(purchases);
//   } catch (error) {
//     console.error('Error fetching data from MongoDB:', error);
//     res.status(500).send({ message: 'Error fetching data from MongoDB' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Route to handle the POST request
// app.post('/api/savePurchase', (req, res) => {
//   const purchaseData = req.body.data;
//   console.log('Received purchase data:', purchaseData);

//   // Here you can add the code to save data to a database

//   res.status(200).send({ message: 'Data received successfully!' });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const purchaseRoutes = require('./routes/purchases');
// const salesRoutes = require('./routes/sales');
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// const port = 5000;

// // app.use(bodyParser.json({ limit: '100mb' }));
// // app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
// app.use(cors());



// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/purchases';
// mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error.message);
// });

// app.use("/api/auth",authRoutes);

// // app.use('/api', purchaseRoutes);
// // app.use('/api', salesRoutes); 

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


require("dotenv").config();
const express =require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose =require("mongoose");
// const purchaseRoutes = require('./routes/purchases');
const purchaseRoutes = require('./routes/purchaseRoutes');
const authRoutes = require("./routes/authRoutes");
const Division = require('./models/Division');
// const DivisionModel = require("./models/Division");
// const divisionRoutes = require('./routes/divisionRoutes');\
const saleRoutes = require('./routes/saleRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const departmentRoutes = require('./routes/department');
const categoryRoutes = require('./routes/categoryRoutes');
const Purchase = require('./models/Purchase');
// const fabricRoutes = require('./routes/fabric');
const Fabric = require('./models/Fabric');

const fabricRoutes = require('./routes/fabricRoutes');
const managerReportRoutes = require('./routes/managerReportRoutes');
const vendorStockRoutes = require('./routes/vendorStockRoutes');
const sellThroughRoutes = require("./routes/sellThroughRoutes");
const reorderRoutes = require('./routes/reorderRoutes');



const app = express();

const PORT =process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors());

mongoose
.connect(process.env.MONGODB_URI)
  .then(()=> console.log("Connected to Mongo db"))
  .catch((err)=> console.log("couldn't connect to mongodb",err));


app.use('/api', purchaseRoutes);
// app.use('/api', salesRoutes); 
app.use("/api/auth",authRoutes);


// Routes
app.get('/divisions', async (req, res) => {
   const divisions = await Division.find();
  res.json(divisions);
});

app.post('/divisions', async (req, res) => {
  const newDivision = new Division(req.body);
    await newDivision.save();
    res.json(newDivision);
});

app.delete('/divisions/:id', async (req, res) => {
   await Division.findByIdAndDelete(req.params.id);
  res.json({ message: 'Section deleted' });
});

// const sectionSchema = new mongoose.Schema({
//   sectionName: String,
//   parentDivision: String,
//   addedBy: String,
//   date: String
// });

// const Section = mongoose.model('Section', sectionSchema);

// // Routes
// app.get('/sections', async (req, res) => {
//   try {
//     const sections = await Section.find();
//     res.json(sections);
// } catch (error) {
//     console.error('Error fetching sections:', error.message);
//     res.status(500).send({ message: 'Error fetching sections' });
// }
// });

// app.post('/sections', async (req, res) => {
//   const { sectionName, parentDivision, addedBy, date } = req.body;

//   const newSection = new Section({
//       sectionName,
//       parentDivision,
//       addedBy,
//       date
//   });

//   try {
//       await newSection.save();

//       // Also save this data to the Purchase collection
//       const newPurchase = new Purchase({
//           section: sectionName,
//           division: parentDivision,
//           date,
//           addedBy
//       });

//       await newPurchase.save();

//       res.json(newSection);
//   } catch (error) {
//       console.error('Error saving section:', error.message);
//       res.status(500).send({ message: 'Error saving section' });
//   }
// });

// app.delete('/sections/:id', async (req, res) => {
//   try {
//     await Section.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Section deleted' });
// } catch (error) {
//     console.error('Error deleting section:', error.message);
//     res.status(500).send({ message: 'Error deleting section' });
// }
// });
// app.use('/api', divisionRoutes);
app.use('/api', sectionRoutes);
app.use('/sales',saleRoutes);
// app.use('/api/fabric', fabricRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/fabric', fabricRoutes);


app.use('/categories', categoryRoutes);
app.use('/api', managerReportRoutes);
app.use('/api/vendor-stock', vendorStockRoutes);
app.use("/api/sellthrough", sellThroughRoutes);
app.use('/api/reorder', reorderRoutes);


app.listen(PORT,()=>{
  console.log(`Server is listening on port ${PORT}`)
})



