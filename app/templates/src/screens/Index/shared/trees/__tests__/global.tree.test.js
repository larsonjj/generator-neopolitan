<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import GlobalTree from '../global.tree';

describe('Global Tree', function() {

  it('provides the "Global Tree" instance', () => {
    // Expect it to exist
    expect(GlobalTree)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
