<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import HomeView from '../home.view';
import ReactAddons from 'react/addons';

describe('Home Component', function() {

  // Uncomment to use React testing tools
  let ReactTestUtils;
  let reactRender;

  beforeEach(() => {
    ReactTestUtils = ReactAddons.addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
    this.homeView = <HomeView />;
  });

  it('provides the "Home Component" instance', () => {
    // Expect it to exist
    expect(this.homeView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
