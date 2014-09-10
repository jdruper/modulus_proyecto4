'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoleSchema = new Schema({
  name: String,
  description: String,
  active: Boolean
});

module.exports = mongoose.model('Role', RoleSchema);