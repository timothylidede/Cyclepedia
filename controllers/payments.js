const Flutterwave = require('flutterwave-node-v3');
const Payment = require('../models/payments');
const crypto = require('crypto');

const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

exports.lipanampesa = async (req, res, next) => {
    const { email, fullname } = req.user;
    const { amount, phone_number } = req.body;

    const payload = {
        "tx_ref": `CYCLE-${crypto.randomBytes(9).toString('hex')}`,
        "amount": amount,
        "currency": "KES",
        "email": email,
        "phone_number": phone_number,
        "fullname": fullname
    }

    try {
        const response = await flw.MobileMoney.mpesa(payload);

        const { id, tx_ref, flw_ref, amount, ip, payment_type, account_id, customer } = response.data;
        const payment = await Payment.create({
            id,
            tx_ref,
            flw_ref, 
            amount, 
            ip, 
            payment_type, 
            account_id,
            customer
        });


        res.status(200).json({
            success: true,
            message: "Payment successful"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}


exports.cardPayment = async (req, res, next) => {
    const { card_number, cvv, expiry_month, expiry_year, amount} = req.body;
    const { email, phonenumber, fullname } = req.user;
    const payload = {
        "card_number": card_number,
        "cvv": cvv,
        "expiry_month": expiry_month,
        "expiry_year": expiry_year,
        "currency": "KES",
        "amount": amount,
        "redirect_url": "https://www.google.com",
        "fullname": fullname,
        "email": email,
        "phone_number": phonenumber,
        "enckey": process.env.FLW_CARD_ENCKEY,
        "tx_ref": `CYCLE-${crypto.randomBytes(9).toString('hex')}`
    }

    try {
        const response = await flw.Charge.card(payload);

        if (response.meta.authorization.mode === 'pin') {
            let payload2 = payload
            payload2.authorization = {
                "mode": "pin",
                "fields": [
                    "pin"
                ],
                "pin": 3310
            }
            const reCallCharge = await flw.Charge.card(payload2)

            const callValidate = await flw.Charge.validate({
                "otp": "12345",
                "flw_ref": reCallCharge.data.flw_ref
            })
            console.log(callValidate);

        }
        if (response.meta.authorization.mode === 'redirect') {
            // var url = response.meta.authorization.redirect
            // open(url)
        }

        const { id, tx_ref, flw_ref, amount, ip, payment_type, account_id, customer } = response.data;
        const payment = await Payment.create({
            id,
            tx_ref,
            flw_ref, 
            amount, 
            ip, 
            payment_type, 
            account_id,
            customer
        });

        res.status(200).json({
            success: true,
            message: "Payment successful"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        });
        console.log(error);
    }

}