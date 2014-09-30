'use strict';

angular.module('modulusIoApp')
  .controller('CitaAddCtrl', function ($scope, $state, Cita, Cliente, socket, messageCenterService) {
                  
      $scope.cita = new Cita;    
      $scope.clientes = Cliente.query({});
      socket.syncUpdates('cliente', $scope.clientes);
      $scope.horas = 0;
      $scope.minutos = 0;
      
      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {          
          $scope.cita.hora = $scope.horas+":"+$scope.minutos+":00";          
          $scope.cita.recordatorio = ($scope.horas+6)+":"+($scope.minutos-10)+":00";          
          $scope.cita.$save()
          .then( function() {
            messageCenterService.reset();
            messageCenterService.add('success', 'Datos de la cita almacenados.', { status: messageCenterService.status.shown, timeout:4000 });
            $scope.submitted = false;    
            $scope.cita = new Cita;       
            $scope.horas = 0;
            $scope.minutos = 0;
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

      $scope.clientChange = function(e){
          $scope.cita.nombre_cliente = e.target.selectedOptions[0].innerHTML;
      }
  });
