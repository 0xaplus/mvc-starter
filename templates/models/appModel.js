const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  year: {
    type: Number,
    required: true,
    max: [2024, "Year must be less than or equal to 2024"], //validation with custom message
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be greater than or equal to 0"], //validation with custom message
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("app", appSchema);
