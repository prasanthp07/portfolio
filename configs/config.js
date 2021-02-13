

"use strict";

var _ = require("lodash");

var defaults = {
    root: require("path").normalize(__dirname + "/.."),
    host: process.env.HOST || "http://localhost",    
    port: process.env.PORT || 5000,
    SERVER_SECRET:process.env.SERVER_SECRET || "#SERVER_SECRET#",
    logDbUrl: process.env.MONGO_LOGS_URL,
    mongo: {
        dbURL: process.env.MONGO_URL,
        options: {
        //     user: process.env.MONGODBAuthUser,
        //     pass: process.env.MONGODBAuthPass,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    },
    session: {
        maxAge: 86400000
    },
    defaultParams: {
        SKIP: 0,
        LIMIT: 20,
      
    },    
    security: {
        REFRESH_TOK: 1728000,// 20 days
        ACCESS_TOK: 864000// seconds  (10day)
    }
};

var config = {
    local: {
    },
    development: {
    }
};

module.exports = (function () {
    var env = process.env.NODE_ENV || "development";
    return _.merge(defaults, config[env]);
})();
