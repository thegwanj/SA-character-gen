const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sheetSchema = new Schema({
  // left this in because it could be cool to know when a sheet was added
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Sheet = model('Sheet', sheetSchema);

module.exports = Sheet;
