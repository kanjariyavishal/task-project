// routes/invoiceRoutes.js

const express = require('express');
const { createInvoice } = require('../controllers/invoiceController');

const router = express.Router();

// Route to create an invoice
router.post('/create', createInvoice);

module.exports = router;
