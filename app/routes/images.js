module.exports = function(app) {
    // Models
    var Image = require('../models/image');

    // Routes
    Image.methods(['get', 'put', 'post', 'delete']);

    Image.register(app, '/images');
};