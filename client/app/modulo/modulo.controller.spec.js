'use strict';

describe('Controller: ModuloCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var ModuloCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModuloCtrl = $controller('ModuloCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
