<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import HomeRouter from '../home';

describe('Home View', function() {

  beforeEach(() => {
    this.homeRouter = new HomeRouter();
  });

  it('provides the "Home View" instance', () => {
    // Expect it to exist
    expect(this.homeRouter)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
