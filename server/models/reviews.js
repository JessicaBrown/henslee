var mongoose = require('mongoose');

var reviewsSchema = new mongoose.Schema({
    name: {type: String, require: true},
    review: {type: String},
    createdAt: {type: Date, default: Date.now()}
    
});

module.exports = mongoose.model('Reviews', reviewsSchema)

