'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {root} from 'baobab-react/decorators';
import AppStore from '../../shared/stores/app.store';

@root(AppStore)
class AppView extends React.Component {
  render() {
    return (
      <div className="app-container">
        <RouteHandler />
      </div>
    );
  }
}

export default AppView;
