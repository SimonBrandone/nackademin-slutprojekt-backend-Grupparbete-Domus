const { Router } = require('express');
const express = require('express')
const orders = express.Router();
const Order = require('../modules/ordersModel');


orders.post('/api/orders', (req, res) => {

})



module.exports = orders