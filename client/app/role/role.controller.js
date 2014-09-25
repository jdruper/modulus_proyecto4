'use strict';

angular.module('modulusIoApp')
 .controller('RoleCtrl', function ($scope, $rootScope) {

    $scope.tab = 1;
    $rootScope.filtro = {
    	role: ''
    };

    $scope.selectedTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.selected = function(checkTab) {
      return $scope.tab === checkTab;
    };
  });
