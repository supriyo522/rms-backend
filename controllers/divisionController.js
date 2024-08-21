// const divisionService = require('../services/divisionService');

// const getAllDivisions = async (req, res) => {
//     try {
//         const divisions = await divisionService.getAllDivisions();
//         res.json(divisions);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// const createDivision = async (req, res) => {
//     try {
//         const newDivision = await divisionService.createDivision(req.body);
//         res.json(newDivision);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const deleteDivision = async (req, res) => {
//     try {
//         await divisionService.deleteDivision(req.params.id);
//         res.json({ message: 'Division deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// module.exports = {
//     getAllDivisions,
//     createDivision,
//     deleteDivision
// };
