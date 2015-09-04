'use strict'
var Reviews = require('../models/reviews.js');
module.exports = { 
addReview: function(req, res){
        var newReviews = new Reviews(req.body);
        newReviews.save(function(err, result){
            if(err) return res.status(500).send(err);
            else Reviews.find().sort('-createdAt').limit(5).exec( function(err, reviews){
                res.json(reviews)
            })
        })    
    },
    read: function(req, res){
        console.log("*******READ"); //console logs in terminal
       Reviews.find().sort('-createdAt').limit(5).exec( function(err, reviews){
                res.json(reviews)
            })     
    },
      delete: function(req, res) {
          console.log('************DELETE*****');
    Reviews.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};

