'use strict';

describe('Controller: ClienteListCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var ClienteListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClienteListCtrl = $controller('ClienteListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
