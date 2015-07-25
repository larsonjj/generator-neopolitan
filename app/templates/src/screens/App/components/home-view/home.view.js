'use strict';

import React from 'react';
import pageActions from '../../shared/actions/page.actions';

const AppComponent = React.createClass({
  componentWillMount() {
    pageActions.setPage({title: '<%= projectName %>'});
  },
  render() {
    return (
      <div>
        <div className="neopolitan-info">
          <h1>Welcome to Neopolitan!</h1>
          <p>
            Take a look at the <a href="https://github.com/larsonjj/generator-neopolitan#neopolitan-generator">documentation</a> and start mixing up something awesome.
          </p>
          <p>
            <img src="assets/images/neopolitan-logo.png" width="75px" className="logo" />
          </p>
        </div>
        <code className="version">v<%= pkg.version %></code>
      </div>
    );
  }
});

export default AppComponent;
