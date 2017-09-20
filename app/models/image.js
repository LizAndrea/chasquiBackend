var restful = require('node-restful');
var mongoose = require('mongoose');

var Image = mongoose.Schema({
	imagen: 'string',
	titulo: 'string',
	reportingId: { type: mongoose.Schema.ObjectId, ref: "Reporting" }
});

module.exports = restful.model('Image', Image);