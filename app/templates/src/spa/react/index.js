// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import React from 'react';
import Router from 'react-router';
import Routes from './screens/Home';

// Start listening to route changes
Router.run(Routes, (Handler) => {
  // Mount app to #app-wrapper
  React.render(<Handler />, document.getElementById('app-wrapper'));
});

console.log('Welcome to Neopolitan');
