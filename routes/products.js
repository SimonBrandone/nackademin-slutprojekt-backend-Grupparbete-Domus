const productsFile = require('../assets/products.json');
const express = require('express')
const products = express.Router();

products.get('/api/products', (req, res) => {
    res.json(productsFile)
})



module.exports = products