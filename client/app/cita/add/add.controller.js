'use strict';

angular.module('modulusIoApp')
  .controller('CitaAddCtrl', function ($scope, $state, Cita, Cliente, socket, messageCenterService) {
                  
      $scope.cita = new Cita;    
      $scope.clientes = Cliente.query({});
      
      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {          
          $scope.cita.$save()
          .then( function() {
            messageCenterService.reset();
            messageCenterService.add('success', 'Datos de la cita almacenados.', { status: messageCenterService.status.shown, timeout:4000 });
            $scope.submitted = false;    
            $scope.cita = new Cita;       
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              //form[field].$setValidity('mongoose', false);
              //$scope.errors[field] = error.message;
            });
          });
         }
         else{            
              messageCenterService.reset();
              messageCenterService.add('alert', 'Revise los campos marcados en rojo.', { status: messageCenterService.status.shown });
         }    
      }; 
  });
