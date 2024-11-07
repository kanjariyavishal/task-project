// models/Product.js
const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rate: { type: Number, required: true },
  unit: { type: String, required: true }
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
