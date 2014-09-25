'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registro', {
        url: '/registro',
        templateUrl: 'app/registro/registro.html',
        controller: 'RegistroCtrl'
      });
  });