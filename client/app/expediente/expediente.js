'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('expediente', {
        url: '/expediente',
        templateUrl: 'app/expediente/expediente.html',
        controller: 'ExpedienteCtrl'
      });
  });