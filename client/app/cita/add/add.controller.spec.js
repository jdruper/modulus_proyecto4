'use strict';

describe('Controller: CitaAddCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var CitaAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CitaAddCtrl = $controller('CitaAddCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
