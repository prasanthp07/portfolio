/**
 * Project          : Note
 * Module           : Loader
 * Source filename  : loader.js
 * Description      : Loading all models and routes.
 * Author           : Prasanth P <>
 * Copyright        : Copyright © 2018, Note
 *                    Written under contract by .
 */
"use strict";

var fs = require("fs");
module.exports = function (app, mongoose, utils, config, constants, logger) {

    // Paths
    var modelPath = config.root + "/models";
    var routePath = config.root + "/routes";

    // Bootstrap models
    fs.readdirSync(modelPath).forEach(function (file) {
        logger.info("Loading model : " + file);
        require(modelPath + "/" + file + "/schema.js")(mongoose, utils, logger);
    });

    // Bootstrap routes
    fs.readdirSync(routePath).forEach(function (file) {
        logger.info("Loading routes : " + file);
        require(routePath + "/" + file)(app, mongoose, utils, config, constants, logger);
    });
};