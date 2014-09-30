'use strict';

angular.module('modulusIoApp')
  .controller('CitaCtrl', function ($scope, $rootScope) {   
      
    $scope.tab = 1;

    $rootScope.filtro = {
    	cita: '2014-09-26'
    };

    $scope.selectedTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.selected = function(checkTab) {
      return $scope.tab === checkTab;
    };

  });
