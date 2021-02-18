/**
 * @api {get} https://animall-prof.herokuapp.com/api/v1/profiles List All Profiles
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
                    "url": "https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                    "createdAt": "2021-02-15T06:57:38.920Z",
                    "updatedAt": "2021-02-15T06:57:38.920Z"
                }
            ]
        }
 */


 /**
 * @api {get} https://animall-prof.herokuapp.com/api/v1/profiles/:id Get Profile Details
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
                "url": "https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                "createdAt": "2021-02-15T06:57:38.920Z",
                "updatedAt": "2021-02-15T06:57:38.920Z"
            }
        }
 */



 /**
 * @api {post} https://animall-prof.herokuapp.com/api/v1/profiles Add Profile
 * @apiName POST Add Profile 
 * @apiGroup Profiles
 *
 * @apiParam {String} name Name of Profile.
 * @apiParam {String} species
 * @apiParam {Number} weight
 * @apiParam {Number} length
 * @apiParam {Number} lat
 * @apiParam {Number} lng
 * @apiParam {ImageFile} file  Image to be uploaded
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
                "url": "https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                "createdAt": "2021-02-15T06:57:38.920Z",
                "updatedAt": "2021-02-15T06:57:38.920Z"
            }
        }
 */




 /**
 * @api {put} https://animall-prof.herokuapp.com/api/v1/profiles/:id Update Profile 
 * @apiName PUT update Profile 
 * @apiGroup Profiles
 *
 * @apiParam {String} name Name of profile.
 * @apiParam {String} species
 * @apiParam {Number} weight
 * @apiParam {Number} length
 * @apiParam {Number} lat
 * @apiParam {Number} lng
 * @apiParam {ImageFile} file  Image file to be uploaded
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
                "url": "https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg",
                "createdAt": "2021-02-15T06:57:38.920Z",
                "updatedAt": "2021-02-15T06:57:38.920Z"
            }
        }
 */


 /**
 * @api {delete} https://animall-prof.herokuapp.com/api/v1/profiles/:id Delete Profile 
 * @apiName DELETE Delete Profile 
 * @apiGroup Profiles
 *
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
    {
        "meta": {
            "code": 200,
            "timestamp": "2021-02-18T14:46:27.539Z"
        },
        "pagination": {},
        "data": {
            "message": "removed profile successfully"
        }
    }
 */