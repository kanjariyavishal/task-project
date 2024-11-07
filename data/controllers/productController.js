// controllers/productController.js
const Product = require('../models/Product');

// Controller to save a product
const saveProduct = async (req, res) => {
  try {
    const { name, rate, unit } = req.body;

    // Validate input
    if (!name || !rate || !unit) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new product
    const newProduct = new Product({
      name,
      rate,
      unit
    });

    // Save the product to the database
    await newProduct.save();
    res.status(201).json({ message: 'Product saved successfully!', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving product' });
  }
};



const getProducts = async (req, res) => {
    try {
      // Fetch all products from the database
      const products = await Product.find();
  
      // If no products found, return a message
      if (products.length === 0) {
        return res.status(404).json({ message: 'No products found.' });
      }
  
      // Return the list of products
      res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching products' });
    }
  };
  
module.exports = {
  saveProduct,
  getProducts
};
