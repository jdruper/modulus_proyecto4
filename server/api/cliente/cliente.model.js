'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClienteSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Cliente', ClienteSchema);