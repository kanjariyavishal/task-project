// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// POST route to save a product
router.post('/add', productController.saveProduct);
router.get('/show', productController.getProducts);

module.exports = router;
