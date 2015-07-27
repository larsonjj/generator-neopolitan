<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import AppStore from '../app.store';

describe('App', function() {

  it('provides the "App Store"', () => {
    // Expect it to exist
    expect(AppStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
