/* eslint no-unused-vars:0 */
'use strict';

import React from 'react';
import Router from 'react-router';
import HomePage from '../_modules/home/home.jsx';
import BaseLayout from '../_layouts/base.jsx';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route handler={BaseLayout} path="/">
    <DefaultRoute handler={HomePage} />
  </Route>
);
export default routes;
