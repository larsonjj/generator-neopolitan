/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { Route, DefaultRoute } from 'react-router';
import AppView from './components/app-view/app.view';
import HomeView from './components/home-view/home.view';

export default (
  <Route name='App' path='/' handler={AppView}>
    // Place all sub routes here

    // Default route
    <DefaultRoute name='Home' handler={HomeView} />
  </Route>
);
