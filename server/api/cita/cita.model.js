'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitaSchema = new Schema({
  fecha: String,
  hora: String,
  recordatorio: String,
  titulo: String,
  comentarios: String,
  nombre_cliente: String,
  cliente_id: {type: Schema.Types.ObjectId}
});
  
  // CitaSchema
  // .virtual('cliente')
  // .set(function(cliente) {  	
  // 	if(cliente){
  // 		cliente = JSON.parse(cliente);
  //   	this.nombre_cliente = cliente.nombre_completo;
  //   	this.cliente_id = cliente._id;    
  //   }
  // });


module.exports = mongoose.model('Cita', CitaSchema);