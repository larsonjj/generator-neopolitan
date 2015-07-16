// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import angular from 'angular';

// Include angular plugins
import 'angular-route';

// Screens
import {HomeRoute, HomeController} from './screens/home';

// Main module. Must be loaded before screens and modules
angular
  .module('Sample', [
    'ngRoute',
    'Templates' // HTML compiled by browserify ng-html2js transform
  ])
  .config(HomeRoute)
  .config(($routeProvider) => {
    $routeProvider.otherwise({redirectTo: '/'});
  })
  .controller(HomeController);

console.log('Welcome to Neopolitan!');
