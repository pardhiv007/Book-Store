
const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "d9h5hk7spv94k9bf",
  publicKey: "bdb6m74v87fgnhzv",
  privateKey: "b8420796c3e8f747a941257c9f480b27"
});

exports.getToken=()=>{
    
gateway.clientToken.generate({
  }, (err, response) => {
    if(err){
        res.status(500).send(err)
    }else{
        res.send(response)
    }
    // pass clientToken to your front-end
   
  });
  
}

exports.processPayment=()=>{
let nonceFromTheClient=req.body.paymentMethodNonce
let amountFromTheClient=req.body.amount;
gateway.transaction.sale({
    amount: amountFromTheClient,
    paymentMethodNonce: nonceFromTheClient,
    deviceData: deviceDataFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, (err, result) => {
    if(err){
        res.status(500).send(err)
    }else{
        res.send(result)
    }
  });
  
}