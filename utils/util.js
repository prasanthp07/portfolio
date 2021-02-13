/**
 * Project          : Note
 * Module           : Utilities
 * Source filename  : utility.js
 * Description      : Utility functions for multiple modules.
 * Author           : Prasanth P <>
 * Copyright        : Copyright © 2018, Note
 *                     Written under contract by .
 */

"use strict";
var _ = require("lodash");
var constants = require("../configs/constants.js");
var logger = require("../configs/logger");
var async = require("async");
const config = require("../configs/config");
var fs = require("fs");
const CODE = constants.code;
const MSG = constants.text;
const EACH_LIMIT = 25;
module.exports = {



    //generic format function for sending error response
    notifyError: function (req, res, httpStatus, code, message, extraMsg) {
        //setting http status code for response      
        httpStatus = (typeof httpStatus === "undefined") ? 400 : CODE[httpStatus];

        //setting language preference for setting
        var lang = "en";


        if (!code) {
            code = "ERR";
        }

        if (!message) {
            message = "ERR";
        }
        var errorMsg = MSG[lang][message];
        if (extraMsg) {
            if (lang === "en") {
                errorMsg = errorMsg + " : " + extraMsg;
            } else {
                errorMsg = extraMsg + " : " + errorMsg;
            }
        }
        logger.info("CODE", CODE[code]);
        logger.info("errorMsg", errorMsg);
        res.status(httpStatus)
            .json({
                meta: {
                    code: CODE[code],
                    message: errorMsg,
                    timestamp: new Date()
                }
            });
    },

    sendCustomError: function (req, res, httpStatus, code, message) {
        //setting http status code for response      
        httpStatus = (typeof httpStatus === "undefined") ? 400 : CODE[httpStatus];

        //setting language preference for setting

        var lang = "en";

        if (!code) {
            code = CODE.ERR;
        }

        if (!message) {
            message = MSG[lang].ERR;
        }

        res.status(httpStatus)
            .json({
                meta: {
                    code: code,
                    message: message,
                    timestamp: new Date()
                }
            });
    },

    //generic format function for sending Success response
    sendResponse: function (req, res, httpStatus, data, message, code, count) {
        code = (typeof code === "undefined") ? "SUCCESS" : code;
        httpStatus = (typeof httpStatus === "undefined") ? 200 : CODE[httpStatus];
        var skip;
        var limit;
        var lang = "en";

        res.status(httpStatus).json({
            meta: {
                code: CODE[code],
                message: MSG[lang][message],
                timestamp: new Date()
            },
            pagination: {
                skip: skip,
                limit: limit,
                totalCount: count
            },
            data: data
        });
    },

    sendPostSuccess: function (req, res, data) {
        return module.exports.sendResponse(req, res, "HTTP_POST_S", data, "POST_S", "POST_S");
    },

    sendDBError: function (req, res, err) {
        logger.info("sendDBError", err);
        if (err && err.code === 11000) {
            return module.exports.notifyError(req, res, "CONFLICT", "DB_DUPLICATE", "DB_DUPLICATE");
        } else {
            return module.exports.notifyError(req, res, "HTTP_ERR", "DB_ERR", "DB_ERR");
        }
    },

    sendNoRecordError: function (req, res, code) {
        if (code) {
            return module.exports.notifyError(req, res, "NOT_FOUND", "NO_RECORDS", code);
        } else {
            return module.exports.notifyError(req, res, "NOT_FOUND", "NO_RECORDS", "NO_RECORDS");
        }
    },

    sendDBCallbackErrs: function (req, res, err, data) {
        if (err) {
            return module.exports.sendDBError(req, res, err);
        } else {
            if (!data) {
                data = {};
            }
            return module.exports.sendResponse(req, res, "SUCCESS", data, "NO_RECORDS", "NO_RECORDS");
        }
    },

    sendParamsError: function (req, res, code, extraMsg) {
        if (code && code === "invalid") {
            return module.exports.notifyError(req, res, "HTTP_ERR", "BAD_PARAMS", "BAD_PARAMS", extraMsg);
        } else if (code && code === "required") {
            return module.exports.notifyError(req, res, "HTTP_ERR", "PARAM_MISSING", "PARAM_MISSING", extraMsg);
        } else {
            return module.exports.notifyError(req, res, "HTTP_ERR", "PARAM_MISSING", "PARAM_MISSING");
        }

    },

    sendBadReqError: function (req, res) {
        return module.exports.notifyError(req, res, "HTTP_ERR", "BAD_REQUEST", "BAD_REQUEST");
    },

    sendAuthError: function (req, res, code) {
        if (code) {
            return module.exports.notifyError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED", code);
        } else {
            return module.exports.notifyError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED", "NOT_AUTHERIZED");
        }
    },

    sendForbiddenError: function (req, res, code) {
        if (code) {
            return module.exports.notifyError(req, res, "FORBIDDEN", "FORBIDDEN", code);
        } else {
            return module.exports.notifyError(req, res, "FORBIDDEN", "FORBIDDEN", "FORBIDDEN");
        }
    },

    parseQueryParams: function (params) {
        var queryObj = {};
        queryObj.query = (params.query) ? params.query : {};
        queryObj.updateQuery = {};
        queryObj.selectFields = {};
        var selectMode = 1;
        if (params.unselect) {
            selectMode = 0;
        }

        queryObj.options = (params.options) ? params.options : {};

        if (params.skip) {
            queryObj.options.skip = +params.skip;
        }

        if (params.limit) {
            queryObj.options.limit = +params.limit;
        }

        if (params.sort) {
            queryObj.options.sort = params.sort;
        }

        if (params.update) {
            queryObj.updateQuery = params.update;
        }

        if (params.selectFields) {
            if (typeof params.selectFields === "string") {
                var selectArr = params.selectFields.trim().split(",");
                selectArr.forEach(function (value) {
                    if (value.length > 0) {
                        queryObj.selectFields[value.trim()] = selectMode;
                    }
                });
            } else {
                queryObj.selectFields = (params.selectFields !== undefined) ? params.selectFields : null;
            }
        }

        if (params.extraSelectField) {
            Object.keys(params.extraSelectField).forEach(function (key) {
                queryObj.selectFields[key.trim()] = params.extraSelectField[key];
            });
        }

        if (params.populate) {
            queryObj.populate = params.populate;
        }

        logger.info("queryObj", JSON.stringify(queryObj));
        logger.info("queryObj.options ", JSON.stringify(queryObj.options));
        return queryObj;
    },

    checkParams: function (req, params) {
        return new Promise(function (resolve, reject) {
            async.eachLimit(params, EACH_LIMIT, function (param, callback) {
                if ((req.method == "POST" || req.method == "PUT") && typeof req.body[param] == "undefined") {
                    if (param != "password") {
                        logger.info("Paramter missing :", param);
                        callback(new Error(`Missing param: ${param}`));
                    } else {
                        callback(new Error("ParameterMissingError"));
                    }
                } else {
                    callback();
                }
            }, function (err) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve();
                }
            });
        });
    },

    checkRequired: function (req, params, cb) {
        async.eachLimit(params, EACH_LIMIT, function (param, callback) {
            if ((req.method == "POST" || req.method == "PUT") && typeof req.body[param] == "undefined") {
                if (param != "password") {
                    logger.info("Paramter missing :", param);
                    callback(new Error(`Paramter missing : ${param}`));
                } else {
                    callback(new Error("ParameterMissingError"));
                }
            } else {
                callback();
            }
        }, function (err) {
            if (err) {
                return cb(err);
            } else {
                return cb(null);
            }
        });
    },

    getMonthDiff: function (startDate, endDate) {
        var months;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth(); //+ 1;
        months += endDate.getMonth();
        return months <= 0 ? 0 : months;
    },

    dbCallbackHandler: function (req, res, data, err) {
        if (!err && data) {
            return module.exports.sendResponse(req, res, "SUCCESS", data);
        } else {
            return module.exports.sendDBCallbackErrs(req, res, err, data);
        }
    },

    dbArrayCallbackHandler: function (req, res, data, err, count) {
        if (!err && data) {
            if (typeof count === "undefined") {
                return module.exports.sendResponse(req, res, "SUCCESS", data);
            } else {
                if (data.length > 0) { //Object.keys(data).length > 0
                    return module.exports.sendResponse(req, res, "SUCCESS", data, undefined, undefined, count);
                } else {
                    return module.exports.sendResponse(req, res, "SUCCESS", data, "NO_RECORDS", "NO_RECORDS");
                }
            }
        } else {
            return module.exports.sendDBCallbackErrs(req, res, err, data);
        }
    },

    checkFields: function (fields, params, cb) {
        async.eachLimit(params, EACH_LIMIT, function (param, callback) {
            if (typeof fields[param] == "undefined") {

                callback(new Error("ParameterMissingError"));
            } else {
                callback();
            }
        }, function (err) {
            if (err) {
                return cb(err);
            } else {
                return cb(null);
            }
        });
    }
};
