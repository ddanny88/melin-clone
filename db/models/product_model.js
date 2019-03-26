const mongoose = require('mongoose');
// const validator = require('validator');



const Product = mongoose.model('Product', {
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = {
    Product
}