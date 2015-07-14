'use strict';

import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import HomeScreen from '../_modules/home/home';
import Wreqr from './wreqr';

// Set up the app instance
let App = new Marionette.Application();

// Define app regions
App.addRegions({
  // Mount point for application
  appRegion: '#app-wrapper'
});

App.on('start', function() {
  // Start listening to route changes
  if (Backbone.history) {
    Backbone.history.start();
  }
});

Wreqr.on('app:show', function(appView) {
  App.appRegion.show(appView);
});

// Screens & Modules
new HomeScreen();

export default App;
