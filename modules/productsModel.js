const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Products = mongoose.model('products', 
               new Schema({}), 
               'products');

module.exports = Products