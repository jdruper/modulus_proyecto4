/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cita = require('./cita.model');

exports.register = function(socket) {
  Cita.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cita.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cita:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cita:remove', doc);
}