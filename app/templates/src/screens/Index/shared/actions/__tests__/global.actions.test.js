<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import globalActions from '../global.actions';

describe('App', function() {

  it('provides the "App Actions"', () => {
    // Expect it to exist
    expect(globalActions)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
