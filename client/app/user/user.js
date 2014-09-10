'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl',
        abstract: true
      })
      .state('user.list', {
        url: '/',
        templateUrl: 'app/user/list/list.html',
        controller: 'UserListCtrl'
      })
      .state('user.create', {
        url: '/create',
        templateUrl: 'app/user/edit/edit.html',        
        controller: 'UserEditCtrl'
      })      
      .state('user.edit', {
        url: '/edit/{id}',
        templateUrl: 'app/user/edit/edit.html',        
        controller: 'UserEditCtrl'
      })      
      .state('user.delete', {
        url: '/delete',
        templateUrl: 'app/user/list/list.html',        
        controller: 'UserListCtrl'
      })
  });

  angular.module('modulusIoApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET'        
      }
	  });
  });
