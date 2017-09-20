module.exports = function(app) {
    // Models
    var Permission = require('../models/permission');

    // Routes
    Permission.methods(['get', 'put', 'post', 'delete']);

    Permission.register(app, '/permissions');
};