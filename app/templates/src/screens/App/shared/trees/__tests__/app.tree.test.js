<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import AppTree from '../app.tree';

describe('App', function() {

  it('provides the "App Store"', () => {
    // Expect it to exist
    expect(AppTree)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
