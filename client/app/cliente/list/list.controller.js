'use strict';

angular.module('modulusIoApp')
  .controller('ClienteListCtrl', function ($scope, Cliente, $location, messageCenterService) {
    $scope.clientes = Cliente.query({});    
    

    $scope.delete = function(cliente){     
        cliente.$delete()
        .then(function(){
            $scope.clientes = Cliente.query({});
            messageCenterService.reset();
            messageCenterService.add('success', 'Los datos se eliminaron correctamente.', { status: messageCenterService.status.shown });
        });
    }

  });


 