'use strict';

describe('Controller: UserAddCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var UserAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserAddCtrl = $controller('UserAddCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
