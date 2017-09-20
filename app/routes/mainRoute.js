module.exports = function(app) {
    // Routes
    var groupRoute = require('./groups')(app);
    var userRoute = require('./users')(app);
    var userGroupRoute = require('./usersGroups')(app);
    var contentTypeRoute = require('./contentsType')(app);
    var PermissionRoute = require('./permissions')(app);
    var CategoryRoute = require('./categorys')(app);
    var ReportingRoute = require('./reportings')(app);
    var AudioRoute = require('./audios')(app);
    var ImageRoute = require('./images')(app);
    var VideoRoute = require('./videos')(app);
    
};