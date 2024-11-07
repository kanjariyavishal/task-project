// models/InvoiceDetail.js

const mongoose = require('mongoose');

const invoiceDetailSchema = new mongoose.Schema({
  invoiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice', // Reference to the parent Invoice model
    
  },
  productName: { type: String, required: true },
  rate: { type: Number, required: true },
  unit: { type: String, required: true }, // e.g., "pcs", "kg", "box"
  quantity: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  netAmount: { type: Number, required: true }, // rate * quantity - discount
  totalAmount: { type: Number, required: true } // netAmount * quantity (after discount)
});

const InvoiceDetail = mongoose.model('InvoiceDetail', invoiceDetailSchema);

module.exports = InvoiceDetail;
