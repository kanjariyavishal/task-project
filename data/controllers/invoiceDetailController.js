// controllers/invoiceDetailController.js

const InvoiceDetail = require('../models/InvoiceDetail');
const Invoice = require('../models/Invoice');

async function createInvoiceDetail(req, res) {
  try {
    const { invoiceId, productName, rate, unit, quantity, discount } = req.body;

    // Find the corresponding invoice by ID to ensure it exists
    const invoice = await Invoice.findById(invoiceId);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    // Calculate net amount and total amount
    const netAmount = rate * quantity - discount;
    const totalAmount = netAmount * quantity;

    // Create a new invoice detail
    const newInvoiceDetail = new InvoiceDetail({
      invoiceId,
      productName,
      rate,
      unit,
      quantity,
      discount,
      netAmount,
      totalAmount
    });

    // Save the invoice detail
    await newInvoiceDetail.save();

    res.status(201).json({
      message: 'Invoice Detail added successfully',
      invoiceDetail: newInvoiceDetail
    });
  } catch (err) {
    res.status(500).json({ message: 'Error adding invoice detail', error: err });
  }
}

module.exports = {
  createInvoiceDetail
};
