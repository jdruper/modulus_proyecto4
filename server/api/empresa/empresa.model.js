'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmpresaSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Empresa', EmpresaSchema);