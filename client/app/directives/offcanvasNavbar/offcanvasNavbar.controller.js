'use strict';

angular.module('modulusIoApp')
  .controller('OffcanvasNavbarCtrl', function ($scope, $location, Auth, $rootScope) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $rootScope.modulos = [{modulo:'Clientes',sref:'cliente.list', active:true}, 
                          {modulo:'Citas',sref:'cita.list', active:true}, 
                          {modulo:'Expedientes',sref:'expediente', active:true} ]
     $scope.checked;
    $scope.currentTab = 'Modulus';    
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();


    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.setCurrentTab = function(tab){
        $scope.currentTab = tab; 
    };

  });