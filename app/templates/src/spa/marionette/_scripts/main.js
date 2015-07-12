// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import App from './app';

// Start Application
App.start();

// Attach app to window for easier debugging/testing
window.App = App;

// Set up global click event handler to use pushState for links
// use 'data-bypass' attribute on anchors to allow normal link behavior
$(document).on('click', 'a:not([data-bypass])', (event) => {

  let href = $(this).attr('href');
  let protocol = this.protocol + '//';

  if (href.slice(protocol.length) !== protocol) {
    event.preventDefault();
    // router.navigate(href, true);
  }

});

console.log('Welcome to Neopolitan');
