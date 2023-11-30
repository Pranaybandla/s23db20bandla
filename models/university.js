const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  university_id: {
    type: Number,
    required: true,
    min: 0,
    max: 999,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
    min: 1000,
    max: 29999,
  },
});

module.exports = mongoose.model("university", universitySchema);
