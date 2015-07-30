'use strict';
import React from 'react';

class <%= _.classify(newRouteName.toLowerCase()) %> extends React.Component {
  render() {
    return (
      <div>
        <p ref="p"><%= newRouteName.toLowerCase() %> component</p>
      </div>
    );
  }
}

export default <%= _.classify(newRouteName.toLowerCase()) %>;
