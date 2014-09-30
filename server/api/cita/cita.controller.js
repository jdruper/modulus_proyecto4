'use strict';

var _ = require('lodash');
var Cita = require('./cita.model');
var Cliente = require('../cliente/cliente.model');
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

//Creates a new cita in the DB.
exports.create = function(req, res) {
  Cita.create(req.body, function(err, cita) {
    if(err) { return handleError(res, err); }
    
    Cliente.findById(cita.cliente_id, function (err, cliente) {    
    if (err) return next(err);
    if (!cliente) return res.send(404);
        var mandrill_client = new mandrill.Mandrill('HGAbh-QmVBv57Fk32YJvxg');
     var message = {
        "html": "<p>Cliente: Se le recuerda de su cita hoy a las "+cita.hora+"</p>",
        "text": "<p>Se le recuerda de su cita hoy a las "+cita.hora+"</p>",
        "subject": "Recordatorio de Cita",
        "from_email": "jdruper@gmail.com",
        "from_name": "Jose Beita",
        "to": [{
                "email": cliente.email,
                "name": cliente.nombre_completo,
                "type": "to"
            }],
        "headers": {
            "Reply-To": "jdruper@gmail.com"
        },
        "important": true
    };
    var async = false;
    var ip_pool = "Main Pool";
    var fechaDesglosada = cita.fecha.split('-');
    var dia = fechaDesglosada[2];
    var mes = fechaDesglosada[1];
    var anno = fechaDesglosada[0];

    cita.fecha = anno+"-"+mes+"-"+dia;
    var send_at = cita.fecha + " "+cita.recordatorio;
    // send_at = "2014-09-26 14:10:00";
    console.log(send_at);    
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
        console.log(result);     
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });

    var message = {
        "html": "<p>Administrador: Se le recuerda de su cita hoy a las "+cita.hora+"</p>",
        "text": "<p>Se le recuerda de su cita hoy a las "+cita.hora+"</p>",
        "subject": "Recordatorio de Cita",
        "from_email": "jdruper@gmail.com",
        "from_name": "Jose Beita",
        "to": [{
                "email": "jdruper@gmail.com",
                "name": 'Jose Beita',
                "type": "to"
            }],
        "headers": {
            "Reply-To": "jdruper@gmail.com"
        },
        "important": true
    };
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
        console.log(result);     
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });


    return res.json(201, cita);
    });
  });
};


// exports.create = function(req, res) {
//   Cita.create(req.body, function(err, cita) {
//     if(err) { return handleError(res, err); }
//     var mandrill_client = new mandrill.Mandrill('HGAbh-QmVBv57Fk32YJvxg');
//      var message = {
//         "html": "<p>Recordatorio de Cita</p>",
//         "text": "Contenido Ejemplo",
//         "subject": "Recordatorio",
//         "from_email": "jdruper@gmail.com",
//         "from_name": "Jose Beita",
//         "to": [{
//                 "email": "jbeita@ucenfotec.ac.cr",
//                 "name": "Beita",
//                 "type": "to"
//             }],
//         "headers": {
//             "Reply-To": "jdruper@gmail.com"
//         },
//         "important": true
//     };
//     var async = false;
//     var ip_pool = "Main Pool";
//     var send_at = "2014-09-26 20:21:00";
//     mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, 'send_at':send_at}, function(result) {
//         console.log(result);     
//     }, function(e) {
//         // Mandrill returns the error as an object with name and message keys
//         console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
//         // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
//     });
//     return res.json(201, cita);
//   });
// };

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