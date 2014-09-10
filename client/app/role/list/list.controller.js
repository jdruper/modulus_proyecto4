'use strict';

angular.module('modulusIoApp')
  .controller('RoleListCtrl', function ($scope, Role) {
    $scope.roles = Role.query({});
  });
