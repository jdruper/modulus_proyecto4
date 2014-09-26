'use strict';

describe('Controller: CitaListCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var CitaListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CitaListCtrl = $controller('CitaListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
