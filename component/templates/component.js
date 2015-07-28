'use strict';
import React from 'react';

class <%= _.classify(name.toLowerCase()) %> extends React.Component {
  render() {
    return (
      <div>
        <p ref="p"><%= name.toLowerCase() %> component</p>
      </div>
    );
  }
}

export default <%= _.classify(name.toLowerCase()) %>;
