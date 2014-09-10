'use strict';

describe('Controller: RoleListCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var RoleListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoleListCtrl = $controller('RoleListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
