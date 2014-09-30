'use strict';

angular.module('modulusIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modulo', {
        url: '/modulo',
        templateUrl: 'app/modulo/modulo.html',
        controller: 'ModuloCtrl'
      });
  });