// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import App from './app';

// Start Application
App.start();

// Attach app to window for easier debugging/testing
window.App = App;

console.log('Welcome to Neopolitan');
