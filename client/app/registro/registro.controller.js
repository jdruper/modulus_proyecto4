'use strict';

angular.module('modulusIoApp')
  .controller('RegistroCtrl', function ($scope, $timeout, $location) {
    $scope.message = false;

    $scope.timeout =  function( ) {
    	$timeout (function () {
		$scope.mensaje = true;
		$timeout (function () {
			$location.path('/login');
		}, 3000);
	}, 2000)
    };
 });
