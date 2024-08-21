// backend/routes/department.js
const express = require('express');
const router = express.Router();
const Department = require('../models/department');

// Create a new department
router.post('/', async (req, res) => {
  const { name, parent, addedBy, date } = req.body;
  const department = new Department({ name, parent, addedBy, date });
  try {
    await department.save();
    res.status(201).send(department);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.send(departments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a department
router.delete('/:id', async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) res.status(404).send('No department found');
    res.status(200).send(department);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
