'use strict';

describe('Directive: offcanvasNavbar', function () {

  // load the directive's module and view
  beforeEach(module('modulusIoApp'));
  beforeEach(module('app/directives/offcanvasNavbar/offcanvasNavbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<offcanvas-navbar></offcanvas-navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the offcanvasNavbar directive');
  }));
});