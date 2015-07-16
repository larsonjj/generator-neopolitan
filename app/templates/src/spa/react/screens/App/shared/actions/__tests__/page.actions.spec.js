<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import pageActions from '../page.actions';

describe('Main', () => {

  it('provides the "Page Actions"', () => {
    // Expect it to exist
    expect(pageActions)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
