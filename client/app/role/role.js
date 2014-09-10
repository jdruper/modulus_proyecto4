'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('role', {
        url: '/role',
        templateUrl: 'app/role/role.html',
        abstract: true
      })
      .state('role.list', {
        url: '/',
        templateUrl: 'app/role/list/list.html',
        controller: 'RoleListCtrl'
      })
      .state('role.create', {
        url: '/create',
        templateUrl: 'app/role/edit/edit.html',        
        controller: 'RoleEditCtrl'
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
  });

  angular.module('modulusIoApp')
  .factory('Role', function ($resource) {
    return $resource('/api/roles');
  });
