const { format } = require('date-fns');
const purchaseService = require('../services/purchaseService');

const savePurchase = async (req, res) => {
  const purchaseData = req.body.data;
  console.log('Received purchase data:', purchaseData);

  try {
    await purchaseService.savePurchases(purchaseData);
    res.status(200).send({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data to MongoDB1:', error.message);
    res.status(500).send({ message: 'Error saving data to MongoDB' });
  }
};

const getPurchases = async (req, res) => {
  try {
    const purchases = await purchaseService.getAllPurchases();
    res.status(200).send(purchases);
  } catch (error) {
    console.log('Error fetching data from MongoDB2:', error.message);
    res.status(500).send({ message: 'Error fetching data from MongoDB' });
  }
};

const getSalePersonPerform = async (req, res) => {
  try {
    const purchases = await purchaseService.getSalePersonPerform();
    // const formattedPurchases = purchases.map(purchase => ({
    //   ...purchase._doc,
    //   billDate: format(purchase.billDate, 'dd-MM-yyyy')
    // }));

    res.status(200).send(purchases);
  } catch (error) {
    console.error('Error fetching data from MongoDB3:', error.message);
    res.status(500).send({ message: 'Error fetching data from MongoDB' });
  }
};

const getSaleForcast = async (req, res) => {
  try {
    // const { date } = req.query;
    const purchases = await purchaseService.getSaleForcast();
    // const formattedPurchases = purchases.map(purchase => ({
    //   ...purchase._doc,
    //   billDate: format(purchase.billDate, 'dd-MM-yyyy')
    // }));

    res.status(200).send(purchases);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error.message);
    res.status(500).send({ message: 'Error fetching data from MongoDB' });
  }
};

const getStockAtGlance = async (req, res) => {
  try {
    const purchases = await purchaseService.getStockAtGlance();
    // const formattedPurchases = purchases.map(purchase => ({
    //   ...purchase._doc,
    //   billDate: format(purchase.billDate, 'dd-MM-yyyy')
    // }));

    res.status(200).send(purchases);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error.message);
    res.status(500).send({ message: 'Error fetching data from MongoDB' });
  }
};

module.exports = {
  savePurchase,
  getPurchases,
  getSalePersonPerform,
  getSaleForcast,
  getStockAtGlance
};

