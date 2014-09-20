'use strict';

angular.module('modulusIoApp')
  .controller('RoleEditCtrl', function ($document, $scope, $state, Role, messageCenterService, $timeout) {

  	$scope.role = new Role;            

      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
        
          $scope.role.$save()
          .then( function() {
            // Account created, redirect to home
            $state.go('role.list');
            $timeout(function () {
              messageCenterService.add('success', 'Datos del rol almacenados.', { status: messageCenterService.status.shown });
              
            }, 500);
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

          if ($document.find('div.alert-box').length <= 0) {
            messageCenterService.add('danger', 'Revise los campos marcados en rojo.', { status: messageCenterService.status.shown });
          }
         }    
      }; 

    
  });
