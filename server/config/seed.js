/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Role = require('../api/role/role.model');
var Cliente = require('../api/cliente/cliente.model');
var Cita = require('../api/cita/cita.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Jose Beita',
    email: 'jdruper@gmail.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Role.find({}).remove(function() {
  Role.create({
    name: 'Guest',
    description: 'Guest user not authenticated',
    active: true    
  }, {
    name: 'User',
    description: 'Authenticated restricted user',
    active: true    
  }, {
    name: 'admin',
    description: 'Authenticated administrator user',
    active: true    
  }, function() {
      console.log('finished populating roles');
    }
  );
});

Cliente.find({}).remove(function() {
  Cliente.create({
    nombre_completo: 'Cliente Prueba',
    telefono: '2222-2222',
    email: 'jbeita@ucenfotec.ac.cr',
    fecha_nacimiento: '12/12/12',
    direccion: 'San José, Costa Rica'
  }, function() {
      console.log('finished populating clients');
    }
  );
});

Cita.remove({});
