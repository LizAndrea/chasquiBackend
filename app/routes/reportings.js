module.exports = function(app) {
    // Models
    var Reporting = require('../models/reporting');

    // Routes
    Reporting.methods(['get', 'put', 'post', 'delete']);

    Reporting.register(app, '/reportings');
};