'use strict';

/*eslint-disable no-unused-vars*/
var React = require('react');
/*eslint-enable no-unused-vars*/
import <%= _.classify(name.toLowerCase()) %> from '../<%= _.slugify(name.toLowerCase()) %>';

// Uncomment to use React testing tools
// var ReactTestUtils;
// var reactRender;

beforeEach(function() {
  // ReactTestUtils = require('react/addons').addons.TestUtils;
  // reactRender = ReactTestUtils.renderIntoDocument;
  this.<%= _.classify(name.toLowerCase()) %> = <<%= _.classify(name.toLowerCase()) %> />;
});

describe('Testing React Component: <%= _.classify(name.toLowerCase()) %>', function() {
  it('Should run a few assertions', function() {
    expect(this.<%= _.classify(name.toLowerCase()) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });
});
