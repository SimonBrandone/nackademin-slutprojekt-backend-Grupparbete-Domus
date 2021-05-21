const mongoose = require('mongoose');



const productsSchema = mongoose.Schema({
    _id: String,
    title: {
        type: String,
    },
    shortDesc: {
        type: String,
    },
    shortDesc: {
        type: String,
    },
    longDesc: {
        type: String,
    },
    price: Number
    },

)

const Products = mongoose.model('Product', productsSchema)

module.exports = Products