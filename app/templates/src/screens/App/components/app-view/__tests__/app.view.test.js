<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {TestComponent as AppView} from '../app.view';
import testRenderer from '../../../shared/utils/test-renderer';

describe('App View', function() {

  let component = testRenderer(<AppView />);

  it('provides the "App View" instance', () => {
    // Expect it to exist
    expect(component)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('should contain a wrapper div', () => {
    expect(component.type)<% if (testFramework === 'jasmine') { %>.toBe('div')<% } else if (testFramework === 'mocha') { %>.to.equal('div'))<% } %>;
  });

});
