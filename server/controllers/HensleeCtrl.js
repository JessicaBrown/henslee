'use strict';
 
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('ZXm2F-AgRLBZoi4l-TWUqA');
//  service: 'Gmail',
//     auth: {
//         user: 'brownj0923@gmail.com',
//         pass: 'S0chanel'
//     };

// var mailOptions = {
//     from: data.contactEmail, // sender address
//     to: 'brownj0923@gmail.com', // list of receivers
//     subject: 'Message from ' + data.contactName,// Subject line
//      text: data.contactMsg// plaintext body
    
    
//     transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);

// })
// };
/**
 * Send an email when the contact from is submitted
 */
 
 module.exports = {
     sendMail: function(req, res){
        var options = {
            "headers": {
                "Reply-To": req.body.contactMsg
            },
            "subject": "Request for contact",
            "from_email": 'hensleesplumbing@msn.com',
            "from_name": req.body.contactName,
            "to": [{
                "email": "hensleesplumbingheatandair@henslees.com", //replace with email name from domain
                "name": 'Henslees Plumbing Heating and Air',
                "type": "to"
            }],
        };
        mandrill_client.messages.send({"message": options}, function(result) {
            console.log(result);
            res.json(result);
        }, function(e) {
            // Mandrill returns the error as an object with name and message keys
            console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
            res.status(500).json(err);
            // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
        });
        
     }
 }
// exports.sendMail = function(req, res) {
 
//     var data = req.body;
 
//     transporter.sendMail({
//         from: data.contactEmail,
//         to: 'brownj0923@gmail.com',
//         subject: 'Message from ' + data.contactName,
//         text: data.contactMsg
//     });
 
//     res.json(data);
// };


