const mongoose = require('mongoose');

const divisionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Division', divisionSchema);
