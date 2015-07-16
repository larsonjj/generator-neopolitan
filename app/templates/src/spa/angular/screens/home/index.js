'use strict';

// Import Controller
import HomeController from './home.controller';

// Load Template
import './home.html';

// Route Handler
let HomeRoute = ($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controllerAs: 'HomeController'
    });
}

export {HomeRoute, HomeController}
