'use strict';

angular.module('modulusIoApp')
  .controller('ClienteAddCtrl', function ($scope, $state, Cliente, socket, messageCenterService) {
                  
      $scope.cliente = new Cliente;
      
      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
        
          $scope.cliente.$save()
          .then( function() {
            messageCenterService.reset();
            messageCenterService.add('success', 'Datos del cliente almacenados.', { status: messageCenterService.status.shown, timeout:4000 });
            $scope.submitted = false;    
            $scope.cliente = new Cliente;       
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
