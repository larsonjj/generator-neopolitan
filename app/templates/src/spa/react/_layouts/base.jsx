'use strict';

import React from 'react';
import Router from 'react-router';
import Reflux from 'reflux';
import mainStore from '../_scripts/stores/main.store';
let RouteHandler = Router.RouteHandler;

let getState = () => {
  return {
    page: mainStore.getPage()
  };
};

const DefaultComponent = React.createClass({
  mixins: [Reflux.listenTo(mainStore, '_onStoreUpdate')],
  getInitialState() {
    return getState();
  },
  render() {
    return (
      <div className="base-layout">
        <div className="main-container">
          <RouteHandler />
        </div>
      </div>
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onStoreUpdate() {
    this.setState(getState());
  }
});

export default DefaultComponent;
