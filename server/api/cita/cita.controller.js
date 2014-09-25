'use strict';

var _ = require('lodash');
var Cita = require('./cita.model');

// Get list of citas
exports.index = function(req, res) {
  Cita.find(function (err, citas) {
    if(err) { return handleError(res, err); }
    return res.json(200, citas);
  });
};

// Get a single cita
exports.show = function(req, res) {
  Cita.findById(req.params.id, function (err, cita) {
    if(err) { return handleError(res, err); }
    if(!cita) { return res.send(404); }
    return res.json(cita);
  });
};

// Creates a new cita in the DB.
exports.create = function(req, res) {
  Cita.create(req.body, function(err, cita) {
    if(err) { return handleError(res, err); }
    return res.json(201, cita);
  });
};

// Updates an existing cita in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cita.findById(req.params.id, function (err, cita) {
    if (err) { return handleError(res, err); }
    if(!cita) { return res.send(404); }
    var updated = _.merge(cita, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cita);
    });
  });
};

// Deletes a cita from the DB.
exports.destroy = function(req, res) {
  Cita.findById(req.params.id, function (err, cita) {
    if(err) { return handleError(res, err); }
    if(!cita) { return res.send(404); }
    cita.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}