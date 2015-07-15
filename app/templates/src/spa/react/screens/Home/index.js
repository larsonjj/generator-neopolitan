import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import AppView from './components/app-view';
import HomeView from './components/home-view';

export default (
  <Route name='App' path='/' handler={AppView}>
    // Place all sub routes here

    // Default route
    <DefaultRoute handler={HomeView} />
  </Route>
);
