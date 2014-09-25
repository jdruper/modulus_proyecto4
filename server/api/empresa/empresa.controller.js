'use strict';

var _ = require('lodash');
var Empresa = require('./empresa.model');

// Get list of empresas
exports.index = function(req, res) {
  Empresa.find(function (err, empresas) {
    if(err) { return handleError(res, err); }
    return res.json(200, empresas);
  });
};

// Get a single empresa
exports.show = function(req, res) {
  Empresa.findById(req.params.id, function (err, empresa) {
    if(err) { return handleError(res, err); }
    if(!empresa) { return res.send(404); }
    return res.json(empresa);
  });
};

// Creates a new empresa in the DB.
exports.create = function(req, res) {
  Empresa.create(req.body, function(err, empresa) {
    if(err) { return handleError(res, err); }
    return res.json(201, empresa);
  });
};

// Updates an existing empresa in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Empresa.findById(req.params.id, function (err, empresa) {
    if (err) { return handleError(res, err); }
    if(!empresa) { return res.send(404); }
    var updated = _.merge(empresa, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, empresa);
    });
  });
};

// Deletes a empresa from the DB.
exports.destroy = function(req, res) {
  Empresa.findById(req.params.id, function (err, empresa) {
    if(err) { return handleError(res, err); }
    if(!empresa) { return res.send(404); }
    empresa.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}