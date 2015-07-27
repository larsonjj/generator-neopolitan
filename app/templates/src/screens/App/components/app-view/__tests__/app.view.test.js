<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import AppView from '../app.view';
import ReactAddons from 'react/addons';

describe('App View', function() {

  // Uncomment to use React testing tools
  let ReactTestUtils;
  let reactRender;

  beforeEach(() => {
    ReactTestUtils = ReactAddons.addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
    this.appView = <AppView />;
  });

  it('provides the "App View" instance', () => {
    // Expect it to exist
    expect(this.appView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
