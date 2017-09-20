var restful = require('node-restful');
var mongoose = require('mongoose');

var Group = mongoose.Schema({
    name: 'string'
});

module.exports = restful.model('Group', Group);