var restful = require('node-restful');
var mongoose = require('mongoose');

var Permission = mongoose.Schema({
	name: 'string',
	codename: 'string',
    contentTypeId: { type: mongoose.Schema.ObjectId, ref: "ContentType" }
});

module.exports = restful.model('Permission', Permission);