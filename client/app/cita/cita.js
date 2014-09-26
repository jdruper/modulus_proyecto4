'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cita', {
        url: '/cita',
        templateUrl: 'app/cita/cita.html',
        controller: 'CitaCtrl',      
        abstract: true
      })
      .state('cita.list', {
        url: '/',
        templateUrl: 'app/cita/list/list.html',
        controller: 'CitaListCtrl'
      })
      .state('cita.create', {
        url: '/create',
        templateUrl: 'app/cita/add/add.html',        
        controller: 'CitaAddCtrl'
      })      
      .state('cita.edit', {
        url: '/edit/{id}',
        templateUrl: 'app/cita/edit/edit.html',        
        controller: 'CitaEditCtrl'
      })      
      .state('cita.delete', {
        url: '/delete',
        templateUrl: 'app/cita/list/list.html',        
        controller: 'CitaListCtrl'
      })
  })

  .factory('Cita', ['customResource', function ($resource) {
    return $resource('/api/citas/:id/:controller', {
      id: '@_id' 
    },
    {     
      update: {
        method: 'PUT'
      }
	  });
  }]);
