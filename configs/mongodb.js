/**
 * Project          : Note
 * Module           : Mongodb config
 * Source filename  : mongodb.js
 * Description      : Mongodb related configuration
 * Author           : Prasanth P <>
 * Copyright        : Copyright © 2018, Note
 *                    Written under contract by .
 */
"use strict";

var mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
var config = require("./config");
var logger = require("./logger");

//added to avoid mongoose Promise warning
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(config.mongo.dbURL, config.mongo.options)
    .then(() => logger.info("Database connection to MongoDB opened."))
    .catch((e) => console.error.bind(console, "connection error:"))
var db = mongoose.connection;
autoIncrement.initialize(db);

logger.info("Loading MongoDB Settings ...");

module.exports = mongoose;