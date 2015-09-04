'use strict';

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('ZXm2F-AgRLBZoi4l-TWUqA');

module.exports = {
    sendMail: function (req, res) {
        var email = {
            "headers": {
                "Reply-To": req.body.contactEmail
            },
            "html": req.body.contactMsg,
            "subject": "Request for contact",
            "from_email": 'hensleesplumbingheatandair@henslees.com',  //replace with email name from domain
            "from_name": req.body.contactName,
            "to": [{
                "email": "hensleesplumbing@msn.com", 
                "name": 'Henslees Plumbing Heating and Air',
                "type": "to"
            }],
        };
        mandrill_client.messages.send({ "message": email }, function (result) {
            console.log(result);
            res.json(result);
        }, function (e) {
            // Mandrill returns the error as an object with name and message keys
            console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
            res.status(500).json(err);
            // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
        });

    }
}
