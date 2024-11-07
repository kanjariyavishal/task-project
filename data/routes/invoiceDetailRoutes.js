// routes/invoiceDetailRoutes.js

const express = require('express');
const { createInvoiceDetail } = require('../controllers/invoiceDetailController');

const router = express.Router();

// Route to create an invoice detail
router.post('/create', createInvoiceDetail);

module.exports = router;
