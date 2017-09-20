var restful = require('node-restful');
var mongoose = require('mongoose');
var FormatDate = mongoose.Schema.Types.FormatDate = require('mongoose-schema-formatdate');

var User = mongoose.Schema({
    lastlogin: { type: Date },
    password: 'string',
    firstname: 'string',
    lastname: 'string',
    email: 'string',
    isactive: 'string',
    isstaff: 'string',
    username: 'string'
});

module.exports = restful.model('User', User);

