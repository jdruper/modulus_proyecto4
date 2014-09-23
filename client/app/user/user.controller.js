'use strict';

angular.module('modulusIoApp')
  .controller('UserCtrl', function ($scope, $state, User, socket, Role, messageCenterService) {   
      
    $scope.tab = 1;

    $scope.selectedTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.selected = function(checkTab) {
      return $scope.tab === checkTab;
    };

  });
