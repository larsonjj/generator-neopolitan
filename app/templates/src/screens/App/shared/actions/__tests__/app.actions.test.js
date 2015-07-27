<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import appActions from '../app.actions';

describe('App', function() {

  it('provides the "App Actions"', () => {
    // Expect it to exist
    expect(appActions)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
