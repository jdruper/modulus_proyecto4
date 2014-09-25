'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cliente', {
        url: '/cliente',
        templateUrl: 'app/cliente/cliente.html',
        controller: 'ClienteCtrl',      
        abstract: true
      })
      .state('cliente.list', {
        url: '/',
        templateUrl: 'app/cliente/list/list.html',
        controller: 'ClienteListCtrl'
      })
      .state('cliente.create', {
        url: '/create',
        templateUrl: 'app/cliente/add/add.html',        
        controller: 'ClienteAddCtrl'
      })      
      .state('cliente.edit', {
        url: '/edit/{id}',
        templateUrl: 'app/cliente/edit/edit.html',        
        controller: 'ClienteEditCtrl'
      })      
      .state('cliente.delete', {
        url: '/delete',
        templateUrl: 'app/cliente/list/list.html',        
        controller: 'ClienteListCtrl'
      })
  })

  .factory('Cliente', ['customResource', function ($resource) {
    return $resource('/api/clientes/:id/:controller', {
      id: '@_id' 
    },
    {     
      update: {
        method: 'PUT'
      }
	  });
  }]);
