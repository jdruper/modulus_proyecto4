'use strict';

angular.module('modulusIoApp')
  .controller('CitaListCtrl', function ($scope, Cita, $location, messageCenterService) {
    $scope.citas = Cita.query({}, function(data){
        console.log(data);
    });    
    

    $scope.delete = function(cita){     
        cita.$delete()
        .then(function(){
            $scope.citas = Cita.query({});
            messageCenterService.reset();
            messageCenterService.add('success', 'Los datos se eliminaron correctamente.', { status: messageCenterService.status.shown });
        });
    }

  });


 