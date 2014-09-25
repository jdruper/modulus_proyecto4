'use strict';

angular.module('modulusIoApp')
  .controller('UserListCtrl', function ($scope, User, messageCenterService) {
    $scope.users = User.query({});
    
    $scope.delete = function(user){    	
    	user.$delete()
    	.then(function(){
    		$scope.users = User.query({});
            messageCenterService.reset();
            messageCenterService.add('success', 'Los datos se eliminaron correctamente.', { status: messageCenterService.status.shown });
    	});

    }

  });
