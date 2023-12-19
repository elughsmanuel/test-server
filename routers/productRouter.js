const express = require('express');
const { createProduct } = require('../controllers/productController');
const { getAllProducts } = require('../controllers/productController');
const { getProduct } = require('../controllers/productController');
const { updateProduct } = require('../controllers/productController');
const { deleteProduct } = require('../controllers/productController');

const product = express.Router();

product.post('/create-product', createProduct);
product.get('/', getAllProducts);
product.get('/get-product/:id', getProduct);
product.patch('/update-product/:id', updateProduct);
product.delete('/delete-product/:id', deleteProduct);

module.exports = product;
