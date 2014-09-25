'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClienteSchema = new Schema({
  nombre_completo: String,
  telefono: String,
  email: String,
  fecha_nacimiento: String,
  direccion: String
});

module.exports = mongoose.model('Cliente', ClienteSchema);