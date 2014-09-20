'use strict';

describe('Service: customResource', function () {

  // load the service's module
  beforeEach(module('modulusIoApp'));

  // instantiate service
  var customResource;
  beforeEach(inject(function (_customResource_) {
    customResource = _customResource_;
  }));

  it('should do something', function () {
    expect(!!customResource).toBe(true);
  });

});
