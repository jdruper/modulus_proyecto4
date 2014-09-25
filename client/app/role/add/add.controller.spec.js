'use strict';

describe('Controller: RoleAddCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var RoleAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoleAddCtrl = $controller('RoleAddCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
