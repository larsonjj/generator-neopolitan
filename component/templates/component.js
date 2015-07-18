'use strict';
import React from 'react';

const <%= _.classify(name.toLowerCase()) %> = React.createClass({
  render: function() {
    return (
      <div>
        <p ref="p"><%= name.toLowerCase() %> component</p>
      </div>
    );
  }
});

export default <%= _.classify(name.toLowerCase()) %>;
