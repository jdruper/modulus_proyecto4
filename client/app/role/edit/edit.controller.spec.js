'use strict';

describe('Controller: RoleEditCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var RoleEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoleEditCtrl = $controller('RoleEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
