module.exports = function(app) {
    // Models
    var UserGroup = require('../models/userGroup');

    // Routes
    UserGroup.methods(['get', 'put', 'post', 'delete']);

    UserGroup.register(app, '/usersGroups');
};