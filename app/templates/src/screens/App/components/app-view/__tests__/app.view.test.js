<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import AppView from '../app.view';

describe('App View', function() {

  // Uncomment to use React testing tools
  // var ReactTestUtils;
  // var reactRender;

  beforeEach(() => {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
    // reactRender = ReactTestUtils.renderIntoDocument;
    this.appView = <AppView />;
  });

  it('provides the "App View" instance', () => {
    // Expect it to exist
    expect(this.appView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
