/**
 * Project          : Note
 * Module           : Trail
 * Source filename  : trail.js
 * Description      : Api routes for the trail.
 * Author           : Prasanth P <>
 * Copyright        : Copyright © 2018, Note
 *                    Written under contract by .
 */

"use strict";
const express = require("express");
const multer = require("multer");
var upload = multer({
    dest: "./staticdata"
});
module.exports = function (app, mongoose, utils, config, constants, logger) {
    var controller = require("../controllers/profile")(mongoose, utils, config, constants, logger);
    var router = express.Router();

    router.post("/", upload.single('file'), controller.add);
    router.get("/", controller.fetchList);
    router.get("/:id", controller.fetch);
    router.put("/:id", controller.update);
    // router.delete("/:noteId", controller.deleteNote);
    app.use("/api/v1/profiles", router);

};