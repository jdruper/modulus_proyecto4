/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Empresa = require('./empresa.model');

exports.register = function(socket) {
  Empresa.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Empresa.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('empresa:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('empresa:remove', doc);
}