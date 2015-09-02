'use strict';
 
module.exports = function(app) {
    // Root routing
    var core = require('../models/henslee.js');
 
    app.route('/contact-form').post(core.sendMail);
};
