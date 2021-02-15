/**
 * @api {get} localhost:5001/api/v1/profiles List All profiles
 * @apiName GET Profiles
 * @apiGroup Profiles
 *
 *
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
        {
            "meta": {
                "code": 200,
                "timestamp": "2021-02-15T14:38:27.970Z"
            },
            "pagination": {},
            "data": [
                {
                    "_id": "602a1b623472d34e181dbf9d",
                    "name": "Bull4",
                    "species": "breed3",
                    "weight": 150,
                    "length": 80,
                    "url": "http://localhost:5001/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                    "createdAt": "2021-02-15T06:57:38.920Z",
                    "updatedAt": "2021-02-15T06:57:38.920Z"
                }
            ]
        }
 */


 /**
 * @api {get} localhost:5001/api/v1/profiles/:id List All profiles
 * @apiName GET Profile Details
 * @apiGroup Profiles
 *
 * @apiParam {String} id Profile unique ID.
 *
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
        {
            "meta": {
                "code": 200,
                "timestamp": "2021-02-15T14:40:30.846Z"
            },
            "pagination": {},
            "data": {
                "_id": "602a1b623472d34e181dbf9d",
                "name": "Bull4",
                "species": "breed3",
                "weight": 150,
                "length": 80,
                "url": "http://localhost:5001/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                "createdAt": "2021-02-15T06:57:38.920Z",
                "updatedAt": "2021-02-15T06:57:38.920Z"
            }
        }
 */



 /**
 * @api {post} localhost:5001/api/v1/profiles Add profile
 * @apiName POST Add Profile 
 * @apiGroup Profiles
 *
 * @apiParam {String} name Profile unique ID.
 * @apiParam {String} species
 * @apiParam {Number} weight
 * @apiParam {Number} length
 * @apiParam {Number} lat
 * @apiParam {Number} lng
 * @apiParam {String} url  image url
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
        {
            "meta": {
                "code": 200,
                "timestamp": "2021-02-15T14:40:30.846Z"
            },
            "pagination": {},
            "data": {
                "_id": "602a1b623472d34e181dbf9d",
                "name": "Bull4",
                "species": "breed3",
                "weight": 150,
                "length": 80,
                "url": "http://localhost:5001/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                "createdAt": "2021-02-15T06:57:38.920Z",
                "updatedAt": "2021-02-15T06:57:38.920Z"
            }
        }
 */




 /**
 * @api {put} localhost:5001/api/v1/profiles/:id Update profile 
 * @apiName PUT update Profile 
 * @apiGroup Profiles
 *
 * @apiParam {String} name Profile unique ID.
 * @apiParam {String} species
 * @apiParam {Number} weight
 * @apiParam {Number} length
 * @apiParam {Number} lat
 * @apiParam {Number} lng
 * @apiParam {String} url  image url
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
        {
            "meta": {
                "code": 200,
                "timestamp": "2021-02-15T14:40:30.846Z"
            },
            "pagination": {},
            "data": {
                "_id": "602a1b623472d34e181dbf9d",
                "name": "Bull4",
                "species": "breed3",
                "weight": 150,
                "length": 80,
                "url": "http://localhost:5001/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                "createdAt": "2021-02-15T06:57:38.920Z",
                "updatedAt": "2021-02-15T06:57:38.920Z"
            }
        }
 */