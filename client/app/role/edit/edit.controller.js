'use strict';

angular.module('modulusIoApp')
  .controller('RoleEditCtrl', function ($scope, $state, Role, messageCenterService) {

  	$scope.role = new Role;            

      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
        
          $scope.role.$save()
          .then( function() {
            // Account created, redirect to home
            messageCenterService.add('success', 'Datos del rol almacenados.', { status: messageCenterService.status.permanent });
            $state.go('role.list');
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
           //$scope.alerts.push({type:'error radius', msg:'Por favor revise los campos marcados en rojo.'})
           messageCenterService.add('warning', 'Revise los campos marcados en rojo.', { status: messageCenterService.status.permanent });
         }    
      }; 

    
  });
