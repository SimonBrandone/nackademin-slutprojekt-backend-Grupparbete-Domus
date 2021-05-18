const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    pw: String,
    name: String,
    role: String,
    adress: {
        street: String,
        zip: String,
        city: String
    },
    orderHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User