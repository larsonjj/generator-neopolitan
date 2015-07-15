<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import mainActions from '../main.actions';

describe('Main', () => {

  it('provides the "Main Actions"', () => {
    // Expect it to exist
    expect(mainActions)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
