'use strict';

angular.module('modulusIoApp')
  .controller('OffcanvasNavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.checked;
    $scope.currentTab = 'Modulus';    
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.tabs = [{name:'Modulus', active:true},
                   {name:'Buscar', active:false},
                   {name:'Configuracion', active:false},
                   {name:'Seguridad', active:false}];

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