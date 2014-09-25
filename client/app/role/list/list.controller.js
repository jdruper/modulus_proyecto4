'use strict';

angular.module('modulusIoApp')
  .controller('RoleListCtrl', function ($scope, Role, messageCenterService) {
    $scope.roles = Role.query({});

    $scope.delete = function(role){    	
    	role.$delete()
    	.then(function(){
    		$scope.roles = Role.query({});
    		messageCenterService.reset();
            messageCenterService.add('success', 'Los datos se eliminaron correctamente.', { status: messageCenterService.status.shown });
    	});
    }
  });
