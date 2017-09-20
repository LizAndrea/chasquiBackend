var restful = require('node-restful');
var mongoose = require('mongoose');

var ContenType = mongoose.Schema({
    name: 'string',
    appLabel: 'string',
    model: 'string'
});

module.exports = restful.model('ContenType', ContenType);