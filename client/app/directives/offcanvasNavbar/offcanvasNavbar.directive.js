'use strict';

angular.module('modulusIoApp')
  .directive('offcanvasNavbar', function () {
    return {
      templateUrl: 'app/directives/offcanvasNavbar/offcanvasNavbar.html',
      restrict: 'E',      
      controller: 'OffcanvasNavbarCtrl',
      link: function (scope, element, attrs) {
      	
      }
    };
  });