'use strict';

angular.module('modulusIoApp')
  .controller('RoleAddCtrl', function ($scope, $state, Role, messageCenterService, $timeout) {

  	$scope.role = new Role;            

      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
        
          $scope.role.$save()
          .then( function() {
            messageCenterService.reset();
            messageCenterService.add('success', 'Datos del rol almacenados.', { status: messageCenterService.status.shown, timeout:4000 });            
            $scope.role = new Role;
            $scope.submitted = false;
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
