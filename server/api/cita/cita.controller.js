'use strict';

var _ = require('lodash');
var Cita = require('./cita.model');
var mandrill = require('mandrill-api/mandrill');

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
    var mandrill_client = new mandrill.Mandrill('HGAbh-QmVBv57Fk32YJvxg');
     var message = {
        "html": "<p>LLEGA A LAS 39</p>",
        "text": "Example text content",
        "subject": "example subject",
        "from_email": "jdruper@gmail.com",
        "from_name": "Jose Beita",
        "to": [{
                "email": "dianavalerin@gmail.com",
                "name": "Dianex",
                "type": "to"
            }],
        "headers": {
            "Reply-To": "jdruper@gmail.com"
        },
        "important": true
    };
    var async = false;
    var ip_pool = "Main Pool";
    var send_at = "2014-09-25 22:40:00";
    // mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, 'send_at':send_at}, function(result) {
    //     console.log(result);     
    // }, function(e) {
    //     // Mandrill returns the error as an object with name and message keys
    //     console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    //     // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    // });
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