<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import Index from '../index';
import testRenderer from 'utils/test-renderer';

describe('Index', function() {

  let component = testRenderer(<Index />);

  it('provides the "Index" instance', () => {
    // Expect it to exist
    expect(component)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('should contain an H1 with a welcome message', () => {
    expect(component.props.children[0].props.children)<% if (testFramework === 'jasmine') { %>.toContain(<h1>Welcome to Neopolitan!</h1>)<% } else if (testFramework === 'mocha') { %>.to.contain(<h1>Welcome to Neopolitan!</h1>)<% } %>;
  });

});
