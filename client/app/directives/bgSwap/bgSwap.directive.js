'use strict';

angular.module('modulusIoApp')
  .directive('bgSwap', function () {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        
        if(attrs.bgSwap == ''){
      	   document.body.classList.remove('login-body');
           $('nav.tab-bar').show();
        }
        else if (attrs.bgSwap =='registro') {
          document.body.classList.add('registro-body');
          $('nav.tab-bar').hide();
        }
        else{
          document.body.classList.add('login-body');
          $('nav.tab-bar').hide();
        }
      }
    };
  });