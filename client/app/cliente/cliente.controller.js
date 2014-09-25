'use strict';

angular.module('modulusIoApp')
  .controller('ClienteCtrl', function ($scope) {   
      
    $scope.tab = 1;

    $scope.selectedTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.selected = function(checkTab) {
      return $scope.tab === checkTab;
    };

  });