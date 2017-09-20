var restful = require('node-restful');
var mongoose = require('mongoose');

var Audio = mongoose.Schema({
	audio: 'string',
	titulo: 'string',
	reportingId: { type: mongoose.Schema.ObjectId, ref: "Reporting" }
});

module.exports = restful.model('Audio', Audio);