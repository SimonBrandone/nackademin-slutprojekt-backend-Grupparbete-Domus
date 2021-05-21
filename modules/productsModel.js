const mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* const productsSchema = mongoose.Schema({
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
 */

const Products = mongoose.model('products', 
               new Schema({}), 
               'products');

/* const productsSchema = new mongoose.Schema({ title: String, price: String, id: Number}, 
    { collection : 'products' }) */


// const Products = mongoose.model('product', productsSchema)

module.exports = Products

/* 
new Schema({ url: String, text: String, id: Number}, 
    { collection : 'question' });  */