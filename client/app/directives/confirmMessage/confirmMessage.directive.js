'use strict';

angular.module('modulusIoApp')
  .directive('ngConfirmClick', function () {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var msg = attrs.ngConfirmClick || "Are you sure?";
        var clickAction = attrs.confirmedClick;
        element.bind('click',function (event) {
	        if ( window.confirm(msg) ) {
	            scope.$eval(clickAction)
            }
        });
      }
    };
  });