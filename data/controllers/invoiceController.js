// controllers/invoiceController.js

const Invoice = require('../models/Invoice');

async function createInvoice(req, res) {
  try {
    // Find the latest invoice to get the next invoice number
    const lastInvoice = await Invoice.findOne().sort({ invoiceNo: -1 });

    const nextInvoiceNo = lastInvoice ? lastInvoice.invoiceNo + 1 : 1; // If no invoice found, start at 1
    const invoiceDate = new Date(); // Current date
    const { customerName, totalAmount } = req.body;

    // Create a new invoice
    const newInvoice = new Invoice({
      invoiceNo: nextInvoiceNo,
      invoiceDate: invoiceDate,
      customerName: customerName,
      totalAmount: totalAmount
    });

    // Save the invoice to the database
    await newInvoice.save();

    res.status(201).json({
      message: 'Invoice created successfully',
      invoice: newInvoice
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating invoice', error: err });
  }
}

module.exports = {
  createInvoice
};
