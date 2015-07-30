// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import React from 'react';
import Router from 'react-router';
import Routes from './screens/Index';
import IndexTree from './screens/Index/shared/trees/global.tree';

// Start listening to route changes
Router.run(Routes, (Handler) => {
  // Mount app to #app-wrapper
  React.render(<Handler tree={IndexTree} />, document.getElementById('app-wrapper'));
});

console.log('Welcome to Neopolitan!');
