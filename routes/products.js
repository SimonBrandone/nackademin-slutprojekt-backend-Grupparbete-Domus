const express = require('express')
const router = express.Router();
const Products = require('../modules/productsModel');
const mongoose = require('mongoose');


router.get('/api/products', (req, res) => {
    res.json(productsFile)
})



module.exports = router