// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.verify.services('Vxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
      .verificationChecks
      .create({to: '+5511999999999', code: '8790'})
      .then(verification_check => console.log(verification_check.status));