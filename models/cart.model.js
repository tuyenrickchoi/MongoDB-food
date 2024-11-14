const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    is_order: {
        type: Boolean,
        default: false
    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account'
    },
    items: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'food'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
});

module.exports = mongoose.model('Cart', cartSchema);