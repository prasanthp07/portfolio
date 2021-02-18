define({ "api": [
  {
    "type": "delete",
    "url": "https://animall-prof.herokuapp.com/api/v1/profiles/:id",
    "title": "Delete Profile",
    "name": "DELETE_Delete_Profile",
    "group": "Profiles",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"meta\": {\n        \"code\": 200,\n        \"timestamp\": \"2021-02-18T14:46:27.539Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"message\": \"removed profile successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/api.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "https://animall-prof.herokuapp.com/api/v1/profiles/:id",
    "title": "Get Profile Details",
    "name": "GET_Profile_Details",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Profile unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"meta\": {\n            \"code\": 200,\n            \"timestamp\": \"2021-02-15T14:40:30.846Z\"\n        },\n        \"pagination\": {},\n        \"data\": {\n            \"_id\": \"602a1b623472d34e181dbf9d\",\n            \"name\": \"Bull4\",\n            \"species\": \"breed3\",\n            \"weight\": 150,\n            \"length\": 80,\n            \"url\": \"https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg\",\n            \"createdAt\": \"2021-02-15T06:57:38.920Z\",\n            \"updatedAt\": \"2021-02-15T06:57:38.920Z\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/api.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "https://animall-prof.herokuapp.com/api/v1/profiles",
    "title": "List All Profiles",
    "name": "GET_Profiles",
    "group": "Profiles",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"meta\": {\n            \"code\": 200,\n            \"timestamp\": \"2021-02-15T14:38:27.970Z\"\n        },\n        \"pagination\": {},\n        \"data\": [\n            {\n                \"_id\": \"602a1b623472d34e181dbf9d\",\n                \"name\": \"Bull4\",\n                \"species\": \"breed3\",\n                \"weight\": 150,\n                \"length\": 80,\n                \"url\": \"https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg\",\n                \"createdAt\": \"2021-02-15T06:57:38.920Z\",\n                \"updatedAt\": \"2021-02-15T06:57:38.920Z\"\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/api.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "post",
    "url": "https://animall-prof.herokuapp.com/api/v1/profiles",
    "title": "Add Profile",
    "name": "POST_Add_Profile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Profile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "species",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ImageFile",
            "optional": false,
            "field": "file",
            "description": "<p>Image to be uploaded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"meta\": {\n            \"code\": 200,\n            \"timestamp\": \"2021-02-15T14:40:30.846Z\"\n        },\n        \"pagination\": {},\n        \"data\": {\n            \"_id\": \"602a1b623472d34e181dbf9d\",\n            \"name\": \"Bull4\",\n            \"species\": \"breed3\",\n            \"weight\": 150,\n            \"length\": 80,\n            \"url\": \"https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg\",\n            \"createdAt\": \"2021-02-15T06:57:38.920Z\",\n            \"updatedAt\": \"2021-02-15T06:57:38.920Z\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/api.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "put",
    "url": "https://animall-prof.herokuapp.com/api/v1/profiles/:id",
    "title": "Update Profile",
    "name": "PUT_update_Profile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of profile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "species",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ImageFile",
            "optional": false,
            "field": "file",
            "description": "<p>Image file to be uploaded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"meta\": {\n            \"code\": 200,\n            \"timestamp\": \"2021-02-15T14:40:30.846Z\"\n        },\n        \"pagination\": {},\n        \"data\": {\n            \"_id\": \"602a1b623472d34e181dbf9d\",\n            \"name\": \"Bull4\",\n            \"species\": \"breed3\",\n            \"weight\": 150,\n            \"length\": 80,\n            \"url\": \"https://animall-prof.herokuapp.com/staticdata/a9bc537d2c64ab3d329f2aa84a70364e_45.jpg\",\n            \"createdAt\": \"2021-02-15T06:57:38.920Z\",\n            \"updatedAt\": \"2021-02-15T06:57:38.920Z\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/api.js",
    "groupTitle": "Profiles"
  }
] });
