/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { Route, DefaultRoute } from 'react-router';
import Layout from './components/layout/layout';
import Index from './components/index/index';

export default (
  <Route name='App' path='/' handler={Layout}>
    // Place sub routes here

    // Default route
    <DefaultRoute name='Home' handler={Index} />
  </Route>
);
