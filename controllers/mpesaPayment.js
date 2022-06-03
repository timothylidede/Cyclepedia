const Mpesa = require('mpesa-api').Mpesa;

const credentials = {
    clientKey: process.env.CONSUMER_KEY,
    clientSecret: process.env.CONSUMER_SECRET,
    initiatorPassword: process.env.INITIATOR_PASSWORD,
    certificatePath: null
};

const environment = 'sandbox';

const mpesa = new Mpesa(credentials, 'sandbox');

exports.initiatePayment = (options) =>{

    mpesa
    .lipaNaMpesaOnline({
      BusinessShortCode: 123456,
      Amount: options.Amount /* 1000 is an example amount */,
      PartyA: options.phone_number,
      PhoneNumber: options.phone_number,
      CallBackURL: "https://dc81-197-232-108-7.eu.ngrok.io/api/mpesa/callback",
      AccountReference: "Account Reference",
      passKey: "Lipa Na Mpesa Pass Key",
      TransactionType: "Transaction Type" /* OPTIONAL */,
      TransactionDesc: "Transaction Description" /* OPTIONAL */,
    })
    .then((response) => {

      console.log(response);
    })
    .catch((error) => {

      console.error(error);
    });
    
}