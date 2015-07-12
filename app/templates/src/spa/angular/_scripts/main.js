// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import angular from 'angular';

// Include angular routing module
import 'angular-route';

// Main module. Must be loaded before screens and modules
angular
  .module('<%= _.camelize(projectName) %>', [
    'ngRoute'
  ])
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

// Include Screens and Modules
import '../_modules/home/home';

console.log('Welcome to Neopolitan!');
