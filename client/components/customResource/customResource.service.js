'use strict';

angular.module('modulusIoApp')
  .factory('customResource', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return function( url, params, methods ) {
      var defaults = {
        update: { method: 'put', isArray: false },
        create: { method: 'post' }
      };
       
      methods = angular.extend( defaults, methods );

      var resource = $resource( url, params, methods );
   
      resource.prototype.$save = function() {
        if ( !this._id ) {
          return this.$create();
        }
        else {
          return this.$update();
        }
      };
   
      return resource;
    };
  });
