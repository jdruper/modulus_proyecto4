'use strict';

angular.module('modulusIoApp')
  .controller('UserAddCtrl', function ($document, $scope, $state, User, socket, Role, messageCenterService) {
      
      $scope.roles = Role.query({});
      $scope.heading = 'Agregar';
      $scope.user = new User;
      
  
      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
        
          $scope.user.$save()
          .then( function() {
            messageCenterService.reset();
            messageCenterService.add('success', 'Datos del usuario almacenados.', { status: messageCenterService.status.shown, timeout:4000 });
            $scope.submitted = false;    
            $scope.user = new User;       
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
