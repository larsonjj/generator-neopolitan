<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {TestComponent as Layout} from '../layout';
import testRenderer from 'utils/test-renderer';

describe('Layout', function() {

  let component = testRenderer(<Layout />);

  it('provides the "Layout" instance', () => {
    // Expect it to exist
    expect(component)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('should contain a wrapper div', () => {
    expect(component.type)<% if (testFramework === 'jasmine') { %>.toBe('div')<% } else if (testFramework === 'mocha') { %>.to.equal('div')<% } %>;
  });

});
