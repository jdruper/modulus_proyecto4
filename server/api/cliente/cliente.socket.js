/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cliente = require('./cliente.model');

exports.register = function(socket) {
  Cliente.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cliente.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cliente:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cliente:remove', doc);
}