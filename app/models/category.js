var restful = require('node-restful');
var mongoose = require('mongoose');

var Category = mongoose.Schema({
    name: 'string'
});

module.exports = restful.model('Category', Category);