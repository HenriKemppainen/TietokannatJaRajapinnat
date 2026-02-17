const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

router.get('/',
    function (request, response) {
        opiskelija.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

router.get('/:id',
    function (request, response) {
        opiskelija.getOne(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });


router.post('/', 
function(request, response) {
  opiskelija.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  opiskelija.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  opiskelija.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;