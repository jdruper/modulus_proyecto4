'use strict';

angular.module('modulusIoApp')
  .controller('UserListCtrl', function ($scope, User, $location) {
    $scope.users = User.query({});
    $scope.heading = 'Listar';
    $scope.eliminar = true;
    
    if($location.path().indexOf('delete') > -1){
    	$scope.heading = 'Eliminar';
    }

  });
