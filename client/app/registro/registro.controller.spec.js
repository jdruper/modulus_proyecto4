'use strict';

describe('Controller: RegistroCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var RegistroCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistroCtrl = $controller('RegistroCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
