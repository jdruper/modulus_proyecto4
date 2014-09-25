'use strict';

angular.module('modulusIoApp')
  .controller('ClienteListCtrl', function ($scope, Cliente, $location, messageCenterService, $modal, $log) {
    $scope.clientes = Cliente.query({});    
    

    $scope.delete = function(user){    	
    	

        // var modalInstance = $modal.open({
        //       templateUrl: '<h1>Holis</h1>',
        //       controller: ModalInstanceCtrl,
        //     });

        //  modalInstance.result.then(function () {

        //     user.$delete()
        //       .then(function(){
        //         $scope.clientes = Cliente.query({});
        //         messageCenterService.reset();
        //         messageCenterService.add('alert', 'Revise los campos marcados en rojo.', { status: messageCenterService.status.shown });
        //         });

              
        //     }, function () {
        //       $log.info('Modal dismissed at: ' + new Date());
        //     });

    }

  });


 