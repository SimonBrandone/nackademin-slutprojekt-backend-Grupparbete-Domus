const express = require('express')
const router = express.Router();
const Order = require('../modules/ordersModel');

const products = require('../assets/products.json');
const mongoose = require('mongoose');



router.post('/api/orders', async (req, res) => {





    console.log(req.body)
    let newOrder = new Order({
        status: req.body.status,
        timestamp: new Date(),
        items: products[0]._id,
        _id: new mongoose.Types.ObjectId(),
        orderValue: products[0].price

    })

    try {
        newOrder.save()
        res.send('Order Created')
    } catch (err) {
        res.send(err)
    }

})



module.exports = router