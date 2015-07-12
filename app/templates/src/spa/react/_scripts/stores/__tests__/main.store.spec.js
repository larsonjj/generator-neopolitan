<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import mainStore from '../main.store';

describe('Main', () => {

  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(() => {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('provides the "Main Store"', () => {
    // Expect it to exist
    expect(mainStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
