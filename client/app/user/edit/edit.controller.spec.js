'use strict';

describe('Controller: UserEditCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var UserEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserEditCtrl = $controller('UserEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
