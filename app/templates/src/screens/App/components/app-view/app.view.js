'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {root} from 'baobab-react/higher-order';
import AppStore from '../../shared/stores/app.store';

class AppView extends React.Component {
  render() {
    return (
      <div className="app-content">
        <RouteHandler />
      </div>
    );
  }
}

export default root(AppView, AppStore);

// Export a un-decorated version of the component for testing
export let TestComponent = AppView;
