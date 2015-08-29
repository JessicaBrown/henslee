'use strict';
 
module.exports = function(app) {
    // Root routing
    var core = require('../node_modules/cors/lib/index.js');
 
    app.route('/contact-form').post(core.sendMail);
};
