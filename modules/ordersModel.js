const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: String,
    timeStamp: Date.now(),
    status: String,
    items: [{
        type: mongoose.Schema.Types.Array
    }],
    orderValue: String
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order