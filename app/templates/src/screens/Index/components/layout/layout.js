'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {root} from 'baobab-react/higher-order';
import GlobalTree from 'trees/global.tree';

class Layout extends React.Component {
  render() {
    return (
      <div className="app-content">
        <RouteHandler tree={this.props.tree} />
      </div>
    );
  }
}

export default root(Layout, GlobalTree);

// Export a un-decorated version of the component for testing
export let TestComponent = Layout;
