const mongoose = require('mongoose');

const Payment = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        tx_ref: {
            type: String,
            required: true
        },
        flw_ref: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        ip: {
            type: String,
            required: true
        },
        payment_type: {
            type: String,
            required: true
        },
        account_id: {
            type: String,
            required: true
        },
        customer: [
            {
                id: {
                    type: String,
                    required: true
                },
                phone_number: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                email: {
                    type: String,
                    required: true
                },
            },
        ],
    },
    {timestamps: true},
    {collection: "payments"}
);

const model = mongoose.model("Payment", Payment);

module.exports = model;