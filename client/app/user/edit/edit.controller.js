'use strict';

angular.module('modulusIoApp')
  .controller('UserEditCtrl', function ($scope, $state, User, socket, Role, messageCenterService, $location) {

      console.log($state);
      $scope.roles = Role.query({});
      $scope.heading = 'Agregar';

      if($state.params.id){
        $scope.user = User.get({id:$state.params.id},function(){});
        $scope.heading = 'Editar';

      } else {
        $scope.user = new User;
      }
   

      $scope.save = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
        
          $scope.user.$save()
          .then( function() {
            // Account created, redirect to home
            messageCenterService.add('success', 'Datos del usuario almacenados.', { status: messageCenterService.status.permanent });
            $state.go('user.list');
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
           messageCenterService.add('warning', 'Revise los campos marcados en rojo.', { status: messageCenterService.status.permanent });
         }    
      }; 

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };

  });
