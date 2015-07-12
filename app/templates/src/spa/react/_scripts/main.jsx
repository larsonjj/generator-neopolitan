// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';

// Start listening to route changes
Router.run(routes, (Handler) => {
  // Mount app to #app-wrapper
  React.render(<Handler />, document.getElementById('app-wrapper'));
});

console.log('Welcome to Neopolitan');
