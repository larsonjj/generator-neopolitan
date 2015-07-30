/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { Route, DefaultRoute } from 'react-router';
import <%= _.classify(newRouteName) %> from './components/<%= _.slugify(newRouteName.toLowerCase()) %>/<%= _.slugify(newRouteName.toLowerCase()) %>';

export default (
  <Route name='<%= _.capitalize(newRouteName) %>' path='/<%= cleanedURL %>'>
    // Place sub routes here

    // Default route
    <DefaultRoute handler={<%= _.classify(newRouteName) %>} />
  </Route>
);
