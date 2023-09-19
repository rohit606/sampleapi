const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
  fuelType: {
    type: String,
  },
  transmission: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});
const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
