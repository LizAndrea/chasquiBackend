module.exports = function(app) {
    // Models
    var Group = require('../models/group');

    // Routes
    Group.methods(['get', 'put', 'post', 'delete']);
    Group.register(app, '/groups');
};