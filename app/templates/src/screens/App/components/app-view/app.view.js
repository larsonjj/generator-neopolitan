'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {root} from 'baobab-react/higher-order';
import AppTree from 'trees/app.tree';

class AppView extends React.Component {
  render() {
    return (
      <div className="app-content">
        <RouteHandler tree={this.props.tree} />
      </div>
    );
  }
}

export default root(AppView, AppTree);

// Export a un-decorated version of the component for testing
export let TestComponent = AppView;
