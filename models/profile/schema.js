
/**
 * Project          : 
 * Module           : Profile model File
 * Source filename  : schema.js
 * Description      : This file is to set the schema for the Note collection.
 * Author           : Prasanth P <>
 * Copyright        : Copyright © 2021, 
 *                    Written under contract by .
 */

"use strict";

/**
 * Module dependencies.
 */

module.exports = function (mongoose, utils, logger) {
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId;
    /*
     * token Schema
     */
    var profileSchema = new Schema({
        name: {
            type: String,
            required: [true, "Please enter name"],
            trim: true
        },
        species: {
            type: String,
            required: [true, "Please enter species"],
            trim: true
        },
        weight: {
            type: Number
        },

        length: {
            type: Number
        },
        lat: {
            type: Number
        },
        lng: {
            type: Number
        },
        user: {
            type: ObjectId
        },
        __v: {
            type: Number,
            select: false
        }

    }, { timestamps: true });


    profileSchema.index({ user: 1 });

    profileSchema = require("../../utils/db-utils")(profileSchema, logger);
    return mongoose.model("Profile", profileSchema);
};


