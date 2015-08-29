'use strict'

//**************************************
//            Dependencies            
//**************************************

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var HensleeCtrl = require('./server/controllers/HensleeCtrl.js');


//*************************************
//            Server/Port          
//*************************************

var app = express();
var data = { message: 'Working!!' }; 


//*************************************
//         MondoDB Connection           
//*************************************

var port = process.env.PORT || 8080;
var mongoUri = 'mongodb://localhost/henslee';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('MongoDB connected at: ', mongoUri);
})


//**************************************
//            Middleware                
//**************************************


app.use(cors());
app.use(bodyParser.json()); 
app.use(express.static('public'));


//**************************************
//            Endpoints                
//**************************************

// app.get('/api/birds', SightingCtrl.read);
app.post('/contact-form', HensleeCtrl.sendMail);
// app.put('/api/birds/:id', SightingCtrl.update);
// app.delete('/api/birds/:id', SightingCtrl.delete);



//**************************************
//           Listen for Server                
//**************************************

app.listen(port, function(){
    console.log('Aplication running on port: ' + port);
});;

