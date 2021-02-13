/**
 * Project          : Note
 * Module           : Common DB functions File
 * Source filename  : db-utils.js
 * Description      : This file contains DB funtions for the All model.
 * Author           : Prasanth P M <likhitha.m@robosoftin.com>
 * Copyright        : Copyright © 2018, Note
 *                    Written under contract by .
 */
"use strict";

module.exports = function (schema, logger) {

    schema.statics._add = function (data) {
        var dataObj = new this(data);
        return dataObj.save();
    };

    schema.statics._getById = function (id, options) {
        var self = this;
        var dbQuery = self.findById(id);
        if (options) {
            if (options.populate) {
                dbQuery = dbQuery.populate(options.populate);
            }
            if (options.selectFields) {
                dbQuery = dbQuery.select(options.selectFields);
            }
        }
        return dbQuery.exec();
    };

    schema.statics._get = function (query, options) {
        var self = this;
        var dbQuery = self.findOne(query);
        if (options) {
            if (options.populate) {
                dbQuery = dbQuery.populate(options.populate);
            }
            if (options.selectFields) {
                dbQuery = dbQuery.select(options.selectFields);
            }
            if (options.sort) {
                dbQuery.sort(options.sort);
            }

        }
        return dbQuery.exec();
    };

    schema.statics._getList = function (queryObj) {
        var self = this;
        var query = (queryObj.query) ? queryObj.query : {};
        var options = (queryObj.options) ? queryObj.options : {};
        var populate = queryObj.populate;
        var selectFields = (queryObj.selectFields) ? queryObj.selectFields : {};
        var dbQuery = self.find(query, selectFields, options);
        if (populate) {
            dbQuery = dbQuery.populate(populate);
        }
        return dbQuery.exec();
    };

    schema.statics._updateById = function (notificationId, updateQuery, populate,selectFields) {
        var self = this;
        var options = { new: true };
        var dbQuery = self.findByIdAndUpdate(notificationId, updateQuery, options);
        if (populate) {
            dbQuery = dbQuery.populate(populate);
        }
        
        if(selectFields) {
            dbQuery = dbQuery.select(selectFields)
        }
        return dbQuery.exec();
    };

    schema.statics._updateOne = function (query, updateQuery) {
        var self = this;
        var options = { new: true };
        return self.findOneAndUpdate(query, updateQuery, options).exec();
    };

    schema.statics._update = function (query, updateQuery) {
        var self = this;
        var options = { multi: true };
        return self.update(query, updateQuery, options).exec();
    };

    schema.statics._getCount = function (query) {

        return this.count(query).exec();
    };

    schema.statics._removeById = function (id) {
        var self = this;
        return self.findByIdAndRemove(id).exec();
    };

    schema.statics.deleteById = function (id) {
        var self = this;
        var update = { isDeleted: true };
        return self.findByIdAndUpdate(id, update).exec();
    };
    return schema;
};