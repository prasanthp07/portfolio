

/**
 * Project          : 
 * Module           :  Controller File
 * Source filename  : 
 * Description      : This file defines all the operation for Note module.
 * Author           : Prasanth P  <>
 * Copyright        : Copyright © 2021, 
 *                    Written under contract by .
 */

"use strict";
var _ = require("lodash");
const fs = require("fs");
const Jimp = require('jimp');

module.exports = function (mongoose, utils, config, constants, logger) {

    var Profile = mongoose.model('Profile');
    var controller = {};
    const resizeImage = (req) => {
        new Promise((resolve, reject) => {

            if ((req.file || {}).filename) {
                Jimp.read(req.file.path)
                    .then(lenna => {
                        fs.unlink(req.file.path, () => { });
                        return resolve(lenna
                            .resize(config.imageSpecs.width, config.imageSpecs.height) // resize
                            .quality(60) // set JPEG quality
                            .write(req.file.path + '_' + req.file.originalname)); // save
                    })
                    .catch(err => {
                        console.error(err);
                        reject(err);
                    });

            }
        })

    }

    controller.add = async function (req, res) {
        try {
            let fields = ["name", "species", "weight", "length", "lat", "lng"];
            let obj = _.pick(req.body, fields);
            if ((req.file || {}).filename) {
                await resizeImage(req);
                obj.url = config.baseurl + req.file.filename + '_' + req.file.originalname;
            }

            // console.log('req.body: ', obj);
            let result = await Profile._add(obj);
            return utils.dbCallbackHandler(req, res, result, null);
        } catch (err) {
            logger.info("error Message", err);
            return utils.dbCallbackHandler(req, res, null, err);
        }
    }

    controller.update = async function (req, res) {
        try {
            let obj = {};
            let fields = ["name", "species", "weight", "length", "lat", "lng"];
            obj = _.pick(req.body, fields);
            if ((req.file || {}).filename) {
                await resizeImage(req);
                obj.url = config.baseurl + req.file.filename + '_' + req.file.originalname;
            }
            let result = await Profile._updateOne({ _id: req.params.id }, obj);
            return utils.dbCallbackHandler(req, res, result, null);
        } catch (err) {
            logger.info("error Message", err);
            return utils.dbCallbackHandler(req, res, null, err);
        }
    }

    controller.fetch = async function (req, res) {
        try {


            let result = await Profile._get({ _id: req.params.id });
            console.log('result: ', result);
            return utils.dbCallbackHandler(req, res, result, null);
        } catch (err) {
            console.log('err: ', err);
            logger.info("error Message", err);
            return utils.dbCallbackHandler(req, res, null, err);
        }

    }

    controller.fetchList = async function (req, res) {
        try {

            let result = await Profile._getList({ query: req.query, options: { sort: { updatedAt: -1 } } });
            console.log('result: ', result);
            return utils.dbCallbackHandler(req, res, result, null);
        } catch (err) {
            console.log('err: ', err);
            logger.info("error Message", err);
            return utils.dbCallbackHandler(req, res, null, err);
        }

    }

    controller.remove = async function (req, res) {
        try {

            let result = await Profile._removeById(req.params.id);
            result = { message: "removed profile successfully" }
            return utils.dbCallbackHandler(req, res, result, null);
        } catch (err) {
            console.log('err: ', err);
            logger.info("error Message", err);
            return utils.dbCallbackHandler(req, res, null, err);
        }
    }


    return controller;
}