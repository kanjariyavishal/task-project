// models/Invoice.js

const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNo: { type: Number, required: true, unique: true },
  invoiceDate: { type: Date, required: true },
  customerName: { type: String, required: true },
  totalAmount: { type: Number, required: true }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
