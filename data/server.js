const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const productRoutes = require('./routes/productRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const invoiceDetailRoutes = require('./routes/invoiceDetailRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();  // Load environment variables from .env file



const app = express();
app.use(bodyParser.json());
// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors());
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.use('/products', productRoutes);
app.use('/invoices', invoiceRoutes);
app.use('/invoiceDetails', invoiceDetailRoutes); 
// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Server listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
