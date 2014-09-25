'use strict';

describe('Controller: ClienteEditCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var ClienteEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClienteEditCtrl = $controller('ClienteEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
