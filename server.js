'use strict'

//**************************************
//            Dependencies            
//**************************************

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var HensleeCtrl = require('./server/controllers/HensleeCtrl.js');
var ReviewsCtrl = require('./server/controllers/ReviewsCtrl.js');

//*************************************
//            Server/Port          
//*************************************

var app = express();
var data = { message: 'Working!!' }; 

//to make live 

//  if (process.env.NODE_ENV == "dev") {
//  	// DEVELOPMENT-SPECIFIC CONFIG //
//  	var portNum = 8080;
	
//  } else {
//  	// PRODUCTION-SPECIFIC CONFIG //
//  	var portNum = 80;
	
//  }


//*************************************
//         MondoDB Connection           
//*************************************

var port = process.env.PORT || 8080;  //to use on my local comp
// var port = portNum;               // to make live
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
// i choose api as pathway and must match mainService
app.get('/api/reviews', ReviewsCtrl.read);
app.post('/contact-form', HensleeCtrl.sendMail);
app.post('/api/review', ReviewsCtrl.addReview);
app.delete('/api/reviews/:id', ReviewsCtrl.delete);



//**************************************
//           Listen for Server                
//**************************************

app.listen(port, function(){
    console.log('Aplication running on port: ' + port);
});;

