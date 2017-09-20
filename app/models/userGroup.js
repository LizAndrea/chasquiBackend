var restful = require('node-restful');
var mongoose = require('mongoose');

var UserGroup = mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: "User" },
    groupId: { type: mongoose.Schema.ObjectId, ref: "Group" }
});

module.exports = restful.model('UserGroup', UserGroup);