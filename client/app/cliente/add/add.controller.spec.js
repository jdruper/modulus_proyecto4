'use strict';

describe('Controller: ClienteAddCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var ClienteAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClienteAddCtrl = $controller('ClienteAddCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
