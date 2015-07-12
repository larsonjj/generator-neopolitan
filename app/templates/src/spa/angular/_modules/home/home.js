'use strict';

// Load Controller
import './home.controller';

// Load Template
import './home.html';

angular.module('Sample')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      });
  });
