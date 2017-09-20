module.exports = function(app) {
    // Models
    var User = require('../models/user');

    // Routes
    User.methods(['get', 'put', 'post', 'delete']);
    User.register(app, '/users');
};