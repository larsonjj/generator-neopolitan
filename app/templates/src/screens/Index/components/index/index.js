'use strict';

import React from 'react';
import globalActions from 'actions/global.actions';

class Index extends React.Component {
  componentWillMount() {
    globalActions.setPage({title: 'Home'});
  }
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
}

export default Index;
