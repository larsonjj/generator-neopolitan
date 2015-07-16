// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import React from 'react';
import Router from 'react-router';
import AppRoutes from './screens/App';

// Start listening to route changes
Router.run(AppRoutes, (Handler) => {
  // Mount app to #app-wrapper
  React.render(<Handler />, document.getElementById('app-wrapper'));
});

console.log('Welcome to Neopolitan');
