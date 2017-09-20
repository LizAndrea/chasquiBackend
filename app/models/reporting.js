var restful = require('node-restful');
var mongoose = require('mongoose');

var Reporting = mongoose.Schema({
	titulo: 'string',
	lead: 'string',
	note: 'string',
	tags: 'string',
	reportDate: { type: Date },
	state: 'number',
    reporterId: { type: mongoose.Schema.ObjectId, ref: "User" },
    categoryId: { type: mongoose.Schema.ObjectId, ref: "Category" }
});

module.exports = restful.model('Reporting', Reporting);