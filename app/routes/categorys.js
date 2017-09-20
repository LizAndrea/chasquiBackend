module.exports = function(app) {
    // Models
    var Category = require('../models/category');

    // Routes
    Category.methods(['get', 'put', 'post', 'delete']);
    Category.register(app, '/categorys');
};