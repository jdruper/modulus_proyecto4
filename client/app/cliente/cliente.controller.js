'use strict';

angular.module('modulusIoApp')
  .controller('ClienteCtrl', function ($scope, $rootScope) {   
      
    $scope.tab = 1;

    $rootScope.filtro = {
    	cliente: ''
    };

    $scope.selectedTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.selected = function(checkTab) {
      return $scope.tab === checkTab;
    };

  });
