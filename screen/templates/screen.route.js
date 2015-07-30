/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { Route, DefaultRoute } from 'react-router';
import <%= _.classify(name) %> from './components/<%= _.slugify(name.toLowerCase()) %>/<%= _.slugify(name.toLowerCase()) %>';

export default (
  <Route name='<%= _.capitalize(name) %>' path='<%= userRoute %>'>
    // Place sub routes here

    // Default route
    <DefaultRoute handler={<%= _.classify(name) %>} />
  </Route>
);
