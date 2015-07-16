'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import Reflux from 'reflux';
import pageStore from '../../shared/stores/page.store';

let getState = () => {
  return {
    page: pageStore.getPage()
  };
};

const DefaultComponent = React.createClass({
  mixins: [Reflux.listenTo(pageStore, '_onStoreUpdate')],
  getInitialState() {
    return getState();
  },
  render() {
    return (
      <div className="main-container">
        <RouteHandler />
      </div>
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onStoreUpdate() {
    this.setState(getState());
  }
});

export default DefaultComponent;
