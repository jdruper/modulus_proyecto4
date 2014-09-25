'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('role', {
        url: '/role',
        templateUrl: 'app/role/role.html',
        controller: 'RoleCtrl',
        abstract: true
      })
      .state('role.list', {
        url: '/',
        templateUrl: 'app/role/list/list.html',
        controller: 'RoleListCtrl'
      })
      .state('role.create', {
        url: '/create',
        templateUrl: 'app/role/add/add.html',        
        controller: 'RoleAddCtrl'
      })      
      .state('role.edit', {
        url: '/edit/{id}',
        templateUrl: 'app/role/edit/edit.html',        
        controller: 'RoleEditCtrl'
      })      
      .state('role.delete', {
        url: '/delete',
        templateUrl: 'app/role/list/list.html',        
        controller: 'RoleListCtrl'
      })
  })

  .factory('Role', ['customResource', function ($resource) {
    return $resource('/api/roles/:id/:controller', {
      id: '@_id' 
    },
    {     
      update: {
        method: 'PUT'
      }
    });
  }]);
