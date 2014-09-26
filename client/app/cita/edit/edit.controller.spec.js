'use strict';

describe('Controller: CitaEditCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var CitaEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CitaEditCtrl = $controller('CitaEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
