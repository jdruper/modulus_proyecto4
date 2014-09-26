'use strict';

describe('Directive: confirmMessage', function () {

  // load the directive's module
  beforeEach(module('modulusIoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<confirm-message></confirm-message>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the confirmMessage directive');
  }));
});