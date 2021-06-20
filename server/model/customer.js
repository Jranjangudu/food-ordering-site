const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create schema
const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
//Create model
module.exports = customer = mongoose.model("Customerdata", CustomerSchema);
