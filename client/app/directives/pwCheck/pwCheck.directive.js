'use strict';

angular.module('modulusIoApp')
  .directive('pwCheck', function () {
    return {
      require: 'ngModel',              
      restrict: 'EA',
      link: function (scope, element, attrs, ctrl) {
        	var firstPassword = '#' + attrs.pwCheck;
            element.on('blur', function () {
                scope.$apply(function () {					
                    if(element.val()===$(firstPassword).val() && $(firstPassword).val().length >= 6){                    	
                        element.removeClass('error-border');
                        $(firstPassword).removeClass('error-border');
                        ctrl.$setValidity('pwmatch', true);
                        scope.passwordMatch = true;
                    }
                    else{                                            	
                        element.addClass('error-border');
                        $(firstPassword).addClass('error-border');
                        ctrl.$setValidity('pwmatch', false);                        
                        scope.passwordMatch = false;
                    }
                    
                });
            });
      }
    };
  });