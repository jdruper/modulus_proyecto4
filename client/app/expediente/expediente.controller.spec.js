'use strict';

describe('Controller: ExpedienteCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var ExpedienteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpedienteCtrl = $controller('ExpedienteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
