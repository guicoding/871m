const mongoose = require('mongoose');

const trSchema = new mongoose.Schema(
  {
    uSecurity: { type: String, required: true, max: 50 },
    uSecDelta: { type: Number, min: 0, max: 1 },
    isUS: { type: Boolean, required: true },
  },
);

const Tr = mongoose.model('Tr', trSchema);

module.exports = Tr;
