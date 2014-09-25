'use strict';

angular.module('modulusIoApp')
  .controller('UserCtrl', function ($scope, $state, User, socket, Role, messageCenterService, $rootScope) {   
      
    $scope.tab = 1;

    $rootScope.filtro = {
    	user: ''
    };

    $scope.selectedTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.selected = function(checkTab) {
      return $scope.tab === checkTab;
    };

  });
