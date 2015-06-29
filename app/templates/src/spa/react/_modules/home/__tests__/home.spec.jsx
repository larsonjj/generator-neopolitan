<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
var React = require('react');
/*eslint-enable no-unused-vars*/
var HomeComponent = require('../home.jsx');

describe('Home Component', function() {

  // Uncomment to use React testing tools
  // var ReactTestUtils;
  // var reactRender;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
    // reactRender = ReactTestUtils.renderIntoDocument;
    this.homeComponent = <HomeComponent />;
  });

  it('provides the "Home Component" instance', function() {
    // Expect it to exist
    expect(this.homeComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
