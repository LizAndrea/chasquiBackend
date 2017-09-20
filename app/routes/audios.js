module.exports = function(app) {
    // Models
    var Audio = require('../models/audio');

    // Routes
    Audio.methods(['get', 'put', 'post', 'delete']);

    Audio.register(app, '/audios');
};