var restful = require('node-restful');
var mongoose = require('mongoose');

var Video = mongoose.Schema({
	video: 'string',
	titulo: 'string',
	reportingId: { type: mongoose.Schema.ObjectId, ref: "Reporting" }
});

module.exports = restful.model('Video', Video);