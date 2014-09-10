'use strict';

describe('Controller: UserListCtrl', function () {

  // load the controller's module
  beforeEach(module('modulusIoApp'));

  var UserListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserListCtrl = $controller('UserListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
