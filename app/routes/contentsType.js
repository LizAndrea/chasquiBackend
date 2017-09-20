module.exports = function(app) {
    // Models
    var ContentType = require('../models/contentType');

    // Routes
    ContentType.methods(['get', 'put', 'post', 'delete']);
    ContentType.register(app, '/contentsType');
};