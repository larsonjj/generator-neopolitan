<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import pageStore from '../page.store';

describe('Main', () => {

  it('provides the "Page Store"', () => {
    // Expect it to exist
    expect(pageStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
